# JavaScript Conventions

- ES6 modules — `type="module"` on script tags
- No global variables — scope everything to modules
- `const` by default, `let` when reassignment is needed, **never `var`**
- Prefer `querySelector` / `querySelectorAll` over older DOM methods
- Use event delegation where practical (attach to parent, not each child)
- All DOM-dependent code runs after `DOMContentLoaded`
- Use `requestAnimationFrame` for visual updates
- Handle errors gracefully — never let the UI break silently
- No jQuery, no frameworks, no external libraries
