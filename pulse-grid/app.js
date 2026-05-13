// Pulse Grid — A reactive grid of cells that pulse with your cursor

const SELECTORS = {
  stage: '#pulse-grid-stage',
  grid: '#pulse-grid',
  action: '#pulse-grid-action',
  reset: '#pulse-grid-reset',
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const readGridSize = (grid) => {
  const styles = getComputedStyle(grid);
  return {
    cols: Number(styles.getPropertyValue('--cols')) || 16,
    rows: Number(styles.getPropertyValue('--rows')) || 9,
  };
};

const buildCells = (grid, count) => {
  grid.replaceChildren();
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid__cell';
    frag.appendChild(cell);
  }
  grid.appendChild(frag);
  return Array.from(grid.children);
};

const init = () => {
  const stage = document.querySelector(SELECTORS.stage);
  const grid = document.querySelector(SELECTORS.grid);
  const actionBtn = document.querySelector(SELECTORS.action);
  const resetBtn = document.querySelector(SELECTORS.reset);

  if (!stage || !grid || !actionBtn || !resetBtn) {
    console.warn('[pulse-grid] missing required elements');
    return;
  }

  let { cols, rows } = readGridSize(grid);
  let cells = buildCells(grid, cols * rows);
  let cellRects = [];

  const state = {
    pointer: null,   // { x, y } in stage coords, or null when no pointer
    ambient: false,  // activate toggle
    t0: performance.now(),
  };

  const measure = () => {
    const stageRect = stage.getBoundingClientRect();
    cellRects = cells.map((cell) => {
      const r = cell.getBoundingClientRect();
      return {
        x: r.left - stageRect.left + r.width / 2,
        y: r.top - stageRect.top + r.height / 2,
      };
    });
  };

  const rebuild = () => {
    const next = readGridSize(grid);
    if (next.cols !== cols || next.rows !== rows) {
      cols = next.cols;
      rows = next.rows;
      cells = buildCells(grid, cols * rows);
    }
    measure();
  };

  // Intensity falloff radius scales with stage size so it feels right on mobile + desktop
  let influence = 180;

  const computeInfluence = () => {
    const rect = stage.getBoundingClientRect();
    influence = Math.max(120, Math.min(rect.width, rect.height) * 0.35);
  };

  let rafId = 0;
  let dirty = false;

  const tick = (now) => {
    rafId = 0;
    const t = (now - state.t0) / 1000;

    for (let i = 0; i < cells.length; i++) {
      const c = cellRects[i];
      if (!c) continue;

      let intensity = 0;

      if (state.pointer) {
        const dx = c.x - state.pointer.x;
        const dy = c.y - state.pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        intensity = Math.max(0, 1 - dist / influence);
        intensity = intensity * intensity; // ease-in falloff
      }

      if (state.ambient) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const wave = 0.5 + 0.5 * Math.sin(t * 1.6 - (col + row) * 0.35);
        intensity = Math.max(intensity, wave * 0.7);
      }

      cells[i].style.setProperty('--i', intensity.toFixed(3));
    }

    // Keep ticking if ambient is on; otherwise we only render on pointer changes
    if (state.ambient) {
      rafId = requestAnimationFrame(tick);
    } else {
      dirty = false;
    }
  };

  const schedule = () => {
    if (rafId || dirty) return;
    dirty = true;
    rafId = requestAnimationFrame(tick);
  };

  // Pointer tracking — single delegated listener on the stage
  const onPointerMove = (event) => {
    const rect = stage.getBoundingClientRect();
    state.pointer = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    schedule();
  };

  const onPointerLeave = () => {
    state.pointer = null;
    schedule();
  };

  stage.addEventListener('pointermove', onPointerMove);
  stage.addEventListener('pointerleave', onPointerLeave);

  // Activate button toggles the ambient wave
  const setActive = (active) => {
    state.ambient = active;
    stage.dataset.active = String(active);
    actionBtn.setAttribute('aria-pressed', String(active));
    actionBtn.textContent = active ? 'Deactivate' : 'Activate';

    if (active && !rafId) {
      state.t0 = performance.now();
      rafId = requestAnimationFrame(tick);
    }
  };

  actionBtn.addEventListener('click', () => setActive(!state.ambient));

  resetBtn.addEventListener('click', () => {
    setActive(false);
    state.pointer = null;
    schedule();
  });

  // Resize: re-measure cell centers and rebuild if breakpoint changed cols/rows
  const onResize = () => {
    rebuild();
    computeInfluence();
    schedule();
  };

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(onResize, 120);
  });

  // Initial measure (after layout settles)
  requestAnimationFrame(() => {
    measure();
    computeInfluence();
    if (prefersReducedMotion.matches) {
      // Static reveal: render once at low intensity for visual presence
      cells.forEach((cell) => cell.style.setProperty('--i', '0.15'));
    } else {
      schedule();
    }
  });

  setActive(false);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
