# Build status

**Current batch:** B00 — Foundation and design-check preview (complete, awaiting review)
**Next batch:** awaiting instructions (plan: B01 one-car asset feasibility, or B02 opening)
**Preview:** https://tbaileyportfolio.co.uk/orbit/ (https://thomas-bailey-9.github.io/orbit/ redirects here — see Known limitations)

## B00 completed
- Vite + React + TypeScript project, pinned versions, npm lockfile, base `/orbit/`.
- Design tokens, Manrope typography (bundled, OFL), global studio styling, reduced-motion guard.
- Shared primitives: GlassPanel, Button, IconButton, Toggle, Select, SwatchGroup, Icon set.
- Static ORBIT wordmark + favicon mark.
- Reusable CarCard with stable placeholder/image-failure fallback.
- Animated values (count-up numbers and prices, typed text, StatValue) with reserved widths and accessible final values.
- Typed car-data contract, three brand records, empty production catalogue.
- Design-check screen (sections A–F) at the site root.
- Docs set and GitHub Pages workflow.

## Checks (B00)
- `npm run build` (type check + production build): pass.
- Playwright on the production build under `/orbit/`: no horizontal overflow at 360, 430, 820 and 1440px; no console errors or failed requests; font loads.
- Keyboard: swatch arrow keys, toggle Space, select, visible focus ring. Touch: swatch and toggle taps. Minimum control target 44px.
- Value animation mid-values, final values, replay, no layout shift, reduced motion shows final values immediately.

## Deployment (B00)
- Workflow run 1 (`36f1ef0`): build + deploy succeeded.
- Live preview verified in a browser at https://tbaileyportfolio.co.uk/orbit/ (390px and 1440px): HTTP 200, noindex present, font loaded, no overflow, no console/network errors, swatch and value animation working.

## Known limitations
- The account's user Pages site has the custom domain `tbaileyportfolio.co.uk`, so GitHub serves this project at `tbaileyportfolio.co.uk/orbit/` and 301-redirects the github.io address there **over plain http**. The https URL works; enabling "Enforce HTTPS" on the portfolio Pages site would fix the redirect (owner decision — not changed).
- No production cars, photos, badges or 3D assets (see ASSET_REGISTER.md).
- Design-check screen occupies the root until real screens exist.
- Car-card Explore/Compare are disabled preview-only actions.
