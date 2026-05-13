# CLAUDE.md

## Project Overview

This is an interactive demo website showcasing modern web development techniques. It should feel premium, polished, and visually impressive — the kind of site that makes visitors say "wow" on first load. Think product landing pages meets interactive playground.

## Tech Stack

- **Structure**: HTML5 (semantic elements)
- **Styling**: Vanilla CSS (no frameworks)
- **Logic**: Vanilla JavaScript (ES6+ modules)
- **Fonts**: Google Fonts (Inter for body, Outfit/Space Grotesk for headings)
- **Icons**: Lucide icons via CDN or inline SVGs
- **No build tools** — this is a static site served directly from files

## Project Structure

```
├── index.html          # Main entry point
├── css/
│   ├── variables.css   # CSS custom properties (colors, spacing, typography)
│   ├── base.css        # Reset, global styles, body defaults
│   ├── components.css  # Reusable component styles (buttons, cards, modals)
│   ├── sections.css    # Section-specific layouts (hero, features, demos)
│   └── animations.css  # Keyframes and transition utilities
├── js/
│   ├── main.js         # Entry point — imports and initializes modules
│   ├── animations.js   # Scroll-triggered and interactive animations
│   ├── demos.js        # Interactive demo logic
│   └── utils.js        # Shared helper functions
├── assets/
│   ├── images/         # Optimized images (WebP preferred)
│   └── icons/          # SVG icons
└── CLAUDE.md           # This file
```

## Design System

### Colors

Use CSS custom properties defined in `css/variables.css`. The palette should feel modern and premium:

- **Primary**: Rich violet/indigo gradient (`hsl(260, 80%, 60%)` range)
- **Accent**: Electric cyan/teal (`hsl(180, 90%, 55%)` range)
- **Surfaces**: Dark mode by default — deep navy/charcoal backgrounds (`hsl(230, 20%, 8%)` to `hsl(230, 15%, 14%)`)
- **Text**: Off-white primary (`hsl(0, 0%, 93%)`), muted secondary (`hsl(230, 10%, 55%)`)
- **Borders**: Subtle, semi-transparent (`rgba(255, 255, 255, 0.08)`)

Never hardcode color values outside of `variables.css`. Always reference `var(--color-name)`.

### Typography

- **Headings**: `'Outfit', sans-serif` — bold, tight letter-spacing (`-0.02em`)
- **Body**: `'Inter', sans-serif` — regular weight, relaxed line-height (`1.6`)
- **Code/Mono**: `'JetBrains Mono', monospace`
- Scale: Use a modular type scale (1.25 ratio). Define sizes as custom properties.

### Spacing

Use a 4px base unit. Define spacing tokens:
- `--space-xs`: 4px
- `--space-sm`: 8px
- `--space-md`: 16px
- `--space-lg`: 24px
- `--space-xl`: 32px
- `--space-2xl`: 48px
- `--space-3xl`: 64px
- `--space-4xl`: 96px

### Border Radius

- Small elements (badges, chips): `6px`
- Medium elements (cards, inputs): `12px`
- Large elements (modals, hero sections): `16px–24px`
- Pills (buttons, tags): `999px`

## Visual Effects & Styling Rules

### Glassmorphism

Use on cards and floating elements:
```css
background: rgba(255, 255, 255, 0.04);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Gradients

- Use gradient text on hero headings (`background-clip: text`)
- Subtle gradient backgrounds on sections (avoid harsh color stops)
- Gradient borders via `border-image` or pseudo-element overlays

### Shadows

- No harsh box shadows. Use layered, soft shadows:
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 12px 24px rgba(0, 0, 0, 0.15);
```
- Colored glow effects for interactive elements using the primary color

### Animations

- **Scroll reveals**: Elements fade in and slide up on scroll (use Intersection Observer)
- **Hover effects**: Scale transforms (`1.02–1.05`), glow effects, color transitions
- **Micro-interactions**: Button press feedback, input focus rings, toggle switches
- **All transitions**: Use `cubic-bezier(0.4, 0, 0.2, 1)` or `ease-out`, duration `200ms–400ms`
- **Respect `prefers-reduced-motion`**: Disable non-essential animations

## Code Conventions

### HTML

- Use semantic elements: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`
- Every section gets a unique `id` for anchor navigation
- Every interactive element gets a descriptive `id` and `aria-label`
- One `<h1>` per page, proper heading hierarchy after that
- Include proper `<meta>` tags: description, viewport, theme-color, Open Graph

### CSS

- Mobile-first responsive design (min-width breakpoints)
- Breakpoints: `640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl)
- BEM-style naming: `.card`, `.card__title`, `.card--highlighted`
- No `!important` unless overriding third-party styles
- Group related properties: positioning → box model → typography → visual → misc
- Use `clamp()` for fluid typography and spacing where appropriate

### JavaScript

- Use ES6 modules (`type="module"` on script tags)
- No global variables — everything scoped to modules
- Use `const` by default, `let` when reassignment is needed, never `var`
- Prefer `querySelector` / `querySelectorAll` over older DOM methods
- Event delegation where practical (attach to parent, not each child)
- All DOM-dependent code runs after `DOMContentLoaded`
- Use `requestAnimationFrame` for visual updates
- Handle errors gracefully — never let the UI break silently

## Interactive Demos

Each demo section should:
1. Have a clear title and one-line description of what it demonstrates
2. Include the interactive element/playground in a visually distinct container
3. Provide visual feedback for every user action
4. Work on both mouse and touch input
5. Be self-contained — each demo's logic in its own module or clearly separated

## Do's

- ✅ Make the hero section immediately impressive (gradient text, animations, particle effects)
- ✅ Add smooth scroll behavior for anchor navigation
- ✅ Use `loading="lazy"` on images below the fold
- ✅ Include a favicon and proper page title
- ✅ Test all interactive elements for keyboard accessibility
- ✅ Use CSS Grid and Flexbox for layouts — no floats
- ✅ Add subtle hover states to everything clickable
- ✅ Keep the page performant — aim for 60fps animations

## Don'ts

- ❌ Don't use any CSS frameworks (no Tailwind, Bootstrap, etc.)
- ❌ Don't use jQuery or any JS frameworks/libraries
- ❌ Don't use inline styles — all styling goes in CSS files
- ❌ Don't hardcode colors or spacing values — use CSS custom properties
- ❌ Don't remove existing comments or documentation
- ❌ Don't add npm/node dependencies — this is a zero-dependency static site
- ❌ Don't use placeholder images — generate real ones or use CSS art
- ❌ Don't make sections that look flat or generic — every section should feel crafted
- ❌ Don't forget focus styles for keyboard navigation

## Performance

- Minimize DOM queries — cache element references
- Use `transform` and `opacity` for animations (GPU-accelerated)
- Debounce scroll and resize handlers
- Use `will-change` sparingly and only on actively animating elements
- Preload critical fonts with `<link rel="preload">`

## Accessibility

- Color contrast ratio: minimum 4.5:1 for body text, 3:1 for large text
- All images have descriptive `alt` text
- Interactive elements are focusable and have visible focus indicators
- Skip-to-content link as the first focusable element
- ARIA attributes on custom interactive widgets
