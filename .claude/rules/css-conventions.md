# CSS Conventions

- **Mobile-first** responsive design (`min-width` breakpoints)
- **Breakpoints**: `640px` (sm), `768px` (md), `1024px` (lg), `1280px` (xl)
- **Naming**: BEM style — `.card`, `.card__title`, `.card--highlighted`
- **No `!important`** unless overriding third-party styles
- **No inline styles** — all styling in CSS files
- **No hardcoded values** for color/spacing — use `var(--token)`
- **Property order**: positioning → box model → typography → visual → misc
- **Fluid sizing**: use `clamp()` for fluid typography and spacing where appropriate
- **Layout**: CSS Grid and Flexbox only — no floats
- **Focus states**: always provide visible focus indicators
- **Hover states**: subtle hover feedback on everything clickable
