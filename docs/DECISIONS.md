# Decisions

## Confirmed (B00)
| Decision | Detail |
|---|---|
| Stack | Vite 8.3.8, React 19.3.1, TypeScript 7.0.2 (exact versions pinned). npm with committed `package-lock.json`. |
| Base path | `/orbit/` for dev, preview and production (`vite.config.ts`). |
| Hosting | GitHub Pages via Actions (`.github/workflows/deploy.yml`), direct pushes to `main`, one checkpoint commit per batch. |
| Font | Manrope variable 200–800 (SIL OFL 1.1), latin subset bundled locally. Has `tnum` tabular figures. |
| Tokens | Colour, type, spacing, radii, borders, shadows, focus, layering and motion in `src/styles/tokens.css`. |
| Styling | Plain CSS files co-located with components/features; no CSS framework. |
| Data | Typed contract in `src/data/types.ts`; unknown = `null`/`unavailable`, never 0. Production catalogue empty until a car passes the gate. |
| Fixtures | Illustrative design-check values live only in `src/features/design-check/fixtures.ts`. |
| Indexing | `noindex, nofollow` meta while unfinished (not access protection). |
| Not installed | No 3D engine, router or animation library yet. |

## Screenshot corrections (from reference §15)
| Screen | Correction |
|---|---|
| Opening | O smaller gap, thicker crescent side; 3.7s timeline overrides static frames. |
| Brands | Smaller natural badges, soft shadows; no excessive Mercedes chrome. |
| Models | Approved layout; real cars/names/data replace placeholders. Explore uses dark glass + white outline (written rule) rather than the light fill shown. |
| Loader | Progress line 2–3px. |
| Headlights | Actual per-car signature; live subtle waiting glow. |
| Reveal | Fine white "Drag to explore" outline. |
| Showroom | Slimmer phone tracks/balls; consistent car; bookmarks not hearts. |
| Detail | Actual matching wheel, two accurate points. |
| Paint | Ring + silver dot below name, no tick. |
| Exterior | Linked pulse/ice-blue selected hotspot feedback. |
| Interior | True driver-eye initial view; consistent nav/icons; actual matching cabin. |
| Specs | Verified values; missing = "Not available". |
| Compare | Lighter numeric weight, subdued red/green; fictional data not reused. |
| Saved | Original navigation; correct Compare icon; no invented menu sections. |
| Final | Actual car/name, selected paint, relevant official link. |
| Browse | Real records, expandable data-driven grid. |
| Small states | Example URL/car replaced; success only after the action succeeds. |

## Unresolved
- Final car list, exact versions/trims, three colours, wheel and interior per car.
- 3D renderer and any animation library (decide in B01/B07).
- 3D asset sources, permissions and budget (no purchase authority).
- Brand badge artwork source and permission.
- Router choice (B02/B03) and whether the design-check screen moves to a dev-only route.
