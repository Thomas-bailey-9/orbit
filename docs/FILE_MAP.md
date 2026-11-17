# File map

## Root
| Path | Purpose |
|---|---|
| `index.html` | Entry HTML; `noindex` meta, favicon. |
| `vite.config.ts` | Vite + React; base `/orbit/`. |
| `.github/workflows/deploy.yml` | Build and deploy to GitHub Pages on push to `main`. Reuse; change only when necessary. |
| `docs/` | Brief, design rules, decisions, state map, asset register, build status, this map, original reference. |

## src
| Path | Purpose |
|---|---|
| `main.tsx` | Mounts the app, imports global styles. |
| `app/App.tsx` | App shell. B00 renders the design-check screen. Future: `app/routing`, `app/state`, `app/layout`. |
| `styles/tokens.css` | **All shared visual values.** |
| `styles/typography.css` | Manrope `@font-face` and type classes (`.t-display`, `.t-h1–3`, `.t-label`, `.t-num`, `.t-stat`…). |
| `styles/global.css` | Reset, studio background, focus, `.visually-hidden`, reduced-motion guard. |
| `styles/fonts/` | Bundled Manrope woff2 + `OFL.txt`. |
| `utilities/useReducedMotion.ts` | Live reduced-motion preference. |
| `utilities/useInViewOnce.ts` | First-visibility trigger (animated values, card entrances). |

## Shared components
| Path | Exports |
|---|---|
| `components/ui/controls.tsx` (+ `ui.css`) | `GlassPanel`, `Button` (primary/secondary/quiet, `selected`), `IconButton` (accessible name, visible label), `Toggle` (switch), `Select` (native, labelled), `SwatchGroup` (radio-based paint swatches). |
| `components/ui/Icon.tsx` | Outline icon set: bookmark, compare, arrow-right, chevron-down, external, info, replay, share. |
| `components/navigation/OrbitWordmark.tsx` | `OrbitWordmark`, `OrbitMark` (static; B02 animates this markup). |
| `components/car-card/CarCard.tsx` | Shared card for model selection (B04) and Browse (B05); image fallback, Save/Explore/Compare. |
| `components/animated-values/` | `AnimatedNumber`, `AnimatedText`, `StatValue`, `useValueProgress`, `formatNumber`. |

## Data
| Path | Purpose |
|---|---|
| `data/types.ts` | Car-data contract (brands, prices, specs, colours, assets, rights, camera anchors, hotspots, destinations). |
| `data/brands.ts` | BMW, Porsche, Mercedes-Benz records. |
| `data/cars/index.ts` | Production catalogue — empty until a car is verified. One file per car under `data/cars/[brand]/`. |

## Features
| Path | Purpose |
|---|---|
| `features/design-check/` | B00 review screen + illustrative fixtures. Self-contained; easy to move to a dev route or delete. |

## Planned locations (not created yet)
`features/{opening,brand-selection,model-selection,browse-cars,loading}` ·
`features/showroom/{scene,reveal,camera,controls,paint-lighting,hotspots,recovery}` ·
`features/{exterior,interior,specifications,comparison,saved-cars,sharing,control-help,final-section}` ·
`components/photo-overlay` · `public/assets/cars/[car-id]/{model,exterior,interior,details,thumbnails}`.
