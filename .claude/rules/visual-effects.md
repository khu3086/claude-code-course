# Visual Effects

## Glassmorphism

For cards and floating elements:

```css
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

## Gradients

- Hero headings: gradient text via `background-clip: text`
- Section backgrounds: subtle gradients, avoid harsh color stops
- Gradient borders: use `border-image` or pseudo-element overlays

## Shadows

No harsh box shadows. Use layered, soft shadows:

```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 12px 24px rgba(0, 0, 0, 0.15);
```

Use colored glow effects (primary color) for interactive elements.

## Animations

- **Scroll reveals**: fade in + slide up via Intersection Observer
- **Hover**: scale `1.02–1.05`, glow, color transitions
- **Micro-interactions**: button press feedback, focus rings, toggle switches
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` or `ease-out`
- **Duration**: `200ms–400ms`
- **Reduced motion**: respect `prefers-reduced-motion` — disable non-essential animations
