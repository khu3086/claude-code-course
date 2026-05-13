---
name: new-demo
description: Scaffold a new interactive demo as a self-contained folder. Use when the user says "add a new demo", "scaffold a demo", "create a demo for X", "new demo called Y", or similar.
---

# new-demo

Scaffolds a new self-contained interactive demo folder following the conventions in [.claude/rules/](../../rules/). Matches the structure of the existing [mountain-explorer/](../../../mountain-explorer/) demo.

## When invoked

1. Collect inputs from the user (use AskUserQuestion if any are missing):
   - **slug** — kebab-case, used as folder name and section id (e.g. `pulse-grid`)
   - **title** — display name (e.g. `Pulse Grid`)
   - **tagline** — one-line description of what the demo shows
2. Verify the slug folder does NOT exist at the project root. If it does, stop and ask.
3. Create three files using the templates in [templates/](templates/). Substitute every `{{SLUG}}`, `{{TITLE}}`, `{{TAGLINE}}` placeholder.
   - `<slug>/index.html` — from [templates/index.html.tmpl](templates/index.html.tmpl)
   - `<slug>/styles.css` — from [templates/styles.css.tmpl](templates/styles.css.tmpl)
   - `<slug>/app.js` — from [templates/app.js.tmpl](templates/app.js.tmpl)
4. Report back with clickable links to the three created files and a one-line hint of what to fill in next (the `// TODO: demo logic` block in `app.js` and the `.demo__stage` content in `index.html`).

## Conventions applied by the templates

The templates already encode the project rules — don't second-guess them:

- **HTML** ([html-conventions.md](../../rules/html-conventions.md)) — semantic landmarks, skip-link, single `<h1>`, descriptive `aria-label`s, full meta tag set including Open Graph and `theme-color`.
- **CSS** ([css-conventions.md](../../rules/css-conventions.md), [design-system.md](../../rules/design-system.md)) — BEM naming, mobile-first, design tokens defined as `:root` custom properties, no hardcoded values in component rules.
- **JS** ([js-conventions.md](../../rules/js-conventions.md)) — ES6 module, `type="module"`, no globals, `DOMContentLoaded` gate, cached element refs, `requestAnimationFrame` for visual updates.
- **Visual effects** ([visual-effects.md](../../rules/visual-effects.md)) — gradient hero text, glassmorphism on the stage card, soft layered shadow.
- **A11y** ([accessibility.md](../../rules/accessibility.md)) — skip-link, focus-visible styles, `prefers-reduced-motion` guard.
- **Performance** ([performance.md](../../rules/performance.md)) — font preconnect, `transform`/`opacity`-only transitions.

## What to do *after* scaffolding

Once the files exist, do NOT implement the demo logic yourself. Stop and let the user describe the interaction. The scaffold is the deliverable — the demo concept is a separate task.
