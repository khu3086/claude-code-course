# Tech Stack & Project Structure

## Stack

- **Structure**: HTML5 (semantic elements)
- **Styling**: Vanilla CSS (no frameworks)
- **Logic**: Vanilla JavaScript (ES6+ modules)
- **Fonts**: Google Fonts (Inter for body, Outfit/Space Grotesk for headings)
- **Icons**: Lucide icons via CDN or inline SVGs
- **No build tools** — static site served directly from files
- **Zero dependencies** — no npm/node packages, no jQuery, no JS frameworks

## File Layout

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
└── CLAUDE.md
```

## Project Feel

Premium, polished, visually impressive — product landing page meets interactive playground. Should make visitors say "wow" on first load.
