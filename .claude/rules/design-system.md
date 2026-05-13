# Design System

All design tokens live in `css/variables.css`. **Never hardcode color or spacing values** outside that file — always reference `var(--token-name)`.

## Colors

- **Primary**: Rich violet/indigo gradient — `hsl(260, 80%, 60%)` range
- **Accent**: Electric cyan/teal — `hsl(180, 90%, 55%)` range
- **Surfaces**: Dark mode by default — deep navy/charcoal `hsl(230, 20%, 8%)` to `hsl(230, 15%, 14%)`
- **Text primary**: Off-white `hsl(0, 0%, 93%)`
- **Text secondary (muted)**: `hsl(230, 10%, 55%)`
- **Borders**: Subtle, semi-transparent — `rgba(255, 255, 255, 0.08)`

## Typography

- **Headings**: `'Outfit', sans-serif` — bold, tight letter-spacing `-0.02em`
- **Body**: `'Inter', sans-serif` — regular weight, line-height `1.6`
- **Code/Mono**: `'JetBrains Mono', monospace`
- **Scale**: Modular 1.25 ratio. Define sizes as custom properties.

## Spacing (4px base)

| Token | Value |
|-------|-------|
| `--space-xs`  | 4px  |
| `--space-sm`  | 8px  |
| `--space-md`  | 16px |
| `--space-lg`  | 24px |
| `--space-xl`  | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |
| `--space-4xl` | 96px |

## Border Radius

- Badges/chips: `6px`
- Cards/inputs: `12px`
- Modals/hero sections: `16px–24px`
- Pills (buttons, tags): `999px`
