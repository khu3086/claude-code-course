/**
 * The Mountain — Interactive Altitude Explorer
 * Main application logic
 * 
 * REVERSED: Summit at top, scroll DOWN to descend the mountain.
 */

(function () {
  'use strict';

  // ─── Constants ───────────────────────────────
  const PIXELS_PER_METER = 20;
  const MAX_ALTITUDE = 8849;
  const VIEWPORT_TRIGGER = 300; // px before visible to start fading in

  // ─── DOM Elements ────────────────────────────
  const introScreen    = document.getElementById('intro-screen');
  const startBtn       = document.getElementById('start-btn');
  const scrollContent  = document.getElementById('scroll-content');
  const bgLayer        = document.getElementById('bg-layer');
  const altitudeFill   = document.getElementById('altitude-fill');
  const altitudeMarker = document.getElementById('altitude-marker');
  const altitudeLabel  = document.getElementById('altitude-label');
  const altitudeInd    = document.getElementById('altitude-indicator');
  const zoneLabelCont  = document.getElementById('zone-label-container');
  const zoneLabel      = document.getElementById('zone-label');
  const modal          = document.getElementById('creature-modal');
  const modalClose     = document.getElementById('modal-close');
  const modalIcon      = document.getElementById('modal-icon');
  const modalName      = document.getElementById('modal-name');
  const modalAltitude  = document.getElementById('modal-altitude');
  const modalScientific= document.getElementById('modal-scientific');
  const modalDesc      = document.getElementById('modal-description');
  const modalFacts     = document.getElementById('modal-facts');
  const introParticles = document.getElementById('intro-particles');

  let started = false;

  // ─── Setup ───────────────────────────────────

  function init() {
    createParticles();
    buildScrollContent();
    attachEvents();
  }

  // ─── Intro Particles ────────────────────────
  function createParticles() {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 12) + 's';
      p.style.animationDelay = (Math.random() * 10) + 's';
      p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
      introParticles.appendChild(p);
    }
  }

  // ─── Altitude to pixel position (REVERSED) ──
  // Summit (8849m) is at the top (pixel 0), foothills (0m) are at the bottom.
  function altitudeToPixel(altitude) {
    return (MAX_ALTITUDE - altitude) * PIXELS_PER_METER;
  }

  // ─── Pixel scroll position to altitude ──────
  function pixelToAltitude(scrollY) {
    const alt = MAX_ALTITUDE - (scrollY / PIXELS_PER_METER);
    return Math.max(0, Math.min(MAX_ALTITUDE, Math.round(alt)));
  }

  // ─── Build Scroll Content ───────────────────
  function buildScrollContent() {
    // Set total height
    const totalHeight = MAX_ALTITUDE * PIXELS_PER_METER;
    scrollContent.style.height = totalHeight + 'px';
    scrollContent.style.position = 'relative';

    // Add zone dividers (reversed: higher altitude = lower pixel position)
    ALTITUDE_ZONES.forEach(zone => {
      // Place divider at the bottom edge of each zone (lower altitude boundary)
      // except the first zone (foothills at 0m, which is at the very bottom)
      if (zone.range[0] === 0) return;

      const divider = document.createElement('div');
      divider.className = 'zone-divider';
      divider.style.top = altitudeToPixel(zone.range[0]) + 'px';
      divider.innerHTML = `
        <div class="zone-divider-line"></div>
        <span class="zone-divider-name">${zone.name} — ${zone.range[0].toLocaleString()}m</span>
      `;
      scrollContent.appendChild(divider);
    });

    // Add altitude marker lines every 500m
    for (let alt = 500; alt <= MAX_ALTITUDE; alt += 500) {
      const hasZoneDivider = ALTITUDE_ZONES.some(z => Math.abs(z.range[0] - alt) < 100);
      if (hasZoneDivider) continue;

      const line = document.createElement('div');
      line.className = 'altitude-line';
      line.style.top = altitudeToPixel(alt) + 'px';

      const label = document.createElement('div');
      label.className = 'altitude-line-label';
      label.textContent = alt.toLocaleString() + ' m';
      line.appendChild(label);

      scrollContent.appendChild(line);
    }

    // Add creature cards — sorted by altitude descending so summit species appear first
    const sortedSpecies = [...MOUNTAIN_SPECIES].sort((a, b) => b.altitude - a.altitude);

    sortedSpecies.forEach((species, index) => {
      const card = document.createElement('div');
      card.className = `creature-card ${index % 2 === 0 ? 'left' : 'right'}`;
      card.style.top = altitudeToPixel(species.altitude) + 'px';
      card.dataset.index = index;

      const typeClass = species.type || 'fauna';
      card.innerHTML = `
        <span class="creature-type-badge ${typeClass}">${typeClass}</span>
        <span class="creature-emoji">${species.emoji}</span>
        <h3 class="creature-name">${species.name}</h3>
        <p class="creature-scientific">${species.scientific}</p>
        <div class="creature-altitude-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
          ${species.altitude.toLocaleString()} m
        </div>
        <p class="creature-desc">${species.description.substring(0, 120)}${species.description.length > 120 ? '…' : ''}</p>
      `;

      card.addEventListener('click', () => openModal(species));
      scrollContent.appendChild(card);
    });
  }

  // ─── Events ──────────────────────────────────
  function attachEvents() {
    startBtn.addEventListener('click', startExperience);
    window.addEventListener('scroll', onScroll, { passive: true });
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  function startExperience() {
    if (started) return;
    started = true;
    introScreen.classList.add('hidden');
    altitudeInd.classList.add('visible');
    zoneLabelCont.classList.add('visible');
    setTimeout(() => {
      introScreen.style.display = 'none';
    }, 800);
  }

  // ─── Scroll Handler ─────────────────────────
  function onScroll() {
    if (!started) {
      if (window.scrollY > 100) startExperience();
      else return;
    }

    const scrollY = window.scrollY;
    const currentAltitude = pixelToAltitude(scrollY);
    const progress = currentAltitude / MAX_ALTITUDE; // 1 at top (summit), 0 at bottom (base)

    // Update altitude indicator
    altitudeLabel.textContent = currentAltitude.toLocaleString() + ' m';
    // Fill goes DOWN as altitude decreases (you're descending)
    altitudeFill.style.height = (progress * 100) + '%';
    altitudeMarker.style.bottom = (progress * 100) + '%';

    // Update zone label
    updateZoneLabel(currentAltitude);

    // Update background gradient
    updateBackground(currentAltitude);

    // Animate creature cards into view
    animateCards(scrollY);
  }

  function updateZoneLabel(altitude) {
    for (let i = ALTITUDE_ZONES.length - 1; i >= 0; i--) {
      if (altitude >= ALTITUDE_ZONES[i].range[0]) {
        zoneLabel.textContent = ALTITUDE_ZONES[i].name;
        return;
      }
    }
    zoneLabel.textContent = ALTITUDE_ZONES[0].name;
  }

  function updateBackground(altitude) {
    // Reversed: high altitude = icy/white (top of page), low altitude = green (bottom)
    // We interpolate within the current zone
    let currentZone = ALTITUDE_ZONES[0];
    let nextZoneBelow = null;

    for (let i = 0; i < ALTITUDE_ZONES.length; i++) {
      if (altitude >= ALTITUDE_ZONES[i].range[0]) {
        currentZone = ALTITUDE_ZONES[i];
        nextZoneBelow = i > 0 ? ALTITUDE_ZONES[i - 1] : null;
      }
    }

    const rangeSize = currentZone.range[1] - currentZone.range[0];
    const posInRange = (altitude - currentZone.range[0]) / rangeSize;
    const clampedPos = Math.max(0, Math.min(1, posInRange));

    // Use current zone colors — gradient[0] is the lower color, gradient[1] is upper
    const topColor = currentZone.bgGradient[1];   // upper edge of current zone
    const bottomColor = currentZone.bgGradient[0]; // lower edge of current zone

    // Blend based on position in zone
    if (nextZoneBelow) {
      const blendedTop = lerpColor(nextZoneBelow.bgGradient[1], currentZone.bgGradient[1], clampedPos);
      const blendedBottom = lerpColor(nextZoneBelow.bgGradient[0], currentZone.bgGradient[0], clampedPos);
      bgLayer.style.background = `linear-gradient(180deg, ${blendedTop} 0%, ${blendedBottom} 100%)`;
    } else {
      bgLayer.style.background = `linear-gradient(180deg, ${topColor} 0%, ${bottomColor} 100%)`;
    }

    // Adjust text colors for contrast — light bg at high altitude needs dark text
    if (altitude > 5500) {
      document.documentElement.style.setProperty('--text-primary', '#2d3a3e');
      document.documentElement.style.setProperty('--text-secondary', 'rgba(45,58,62,0.7)');
    } else {
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', 'rgba(255,255,255,0.7)');
    }
  }

  function animateCards(scrollY) {
    const viewportBottom = scrollY + window.innerHeight;
    const cards = document.querySelectorAll('.creature-card');

    cards.forEach(card => {
      const cardTop = card.offsetTop + scrollContent.offsetTop;
      if (viewportBottom > cardTop - VIEWPORT_TRIGGER) {
        card.classList.add('visible');
      }
    });
  }

  // ─── Modal ──────────────────────────────────
  function openModal(species) {
    modalIcon.textContent = species.emoji;
    modalName.textContent = species.name;
    modalAltitude.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
      ${species.altitude.toLocaleString()} m altitude
    `;
    modalScientific.textContent = species.scientific;
    modalDesc.textContent = species.description;

    modalFacts.innerHTML = '';
    if (species.facts && species.facts.length) {
      species.facts.forEach(fact => {
        const div = document.createElement('div');
        div.className = 'modal-fact';
        div.innerHTML = `
          <span class="modal-fact-icon">◆</span>
          <span class="modal-fact-text">${fact}</span>
        `;
        modalFacts.appendChild(div);
      });
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ─── Utility: Color Interpolation ──────────
  function lerpColor(a, b, t) {
    const ah = parseInt(a.replace('#', ''), 16);
    const bh = parseInt(b.replace('#', ''), 16);

    const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff;
    const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff;

    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);

    return `#${((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1)}`;
  }

  // ─── Go ──────────────────────────────────────
  init();
})();
