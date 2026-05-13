# Performance

Target: 60fps animations, fast first paint.

- Minimize DOM queries — cache element references
- Animate `transform` and `opacity` only (GPU-accelerated)
- Debounce scroll and resize handlers
- Use `will-change` sparingly and only on actively animating elements
- Preload critical fonts with `<link rel="preload">`
- Use `requestAnimationFrame` for visual updates
- Prefer WebP for images
