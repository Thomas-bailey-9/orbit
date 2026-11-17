# Design rules

Tokens: `src/styles/tokens.css`. Type classes: `src/styles/typography.css`. Primary visual reference: the approved car-selection screenshot (BMW model selection). Written rules override screenshot artefacts.

## Visual language
- **Colour:** near-black/charcoal surfaces, soft-white text (`--color-text`), restrained silver accents. Studio screens have photographic depth; information sections use quieter charcoal.
- **Reserved accents:** ice blue (`--color-ice`) ONLY for detail hotspots and their matching content. Muted green/red (`--color-compare-*`) ONLY for eligible like-for-like comparison differences, always with a text label.
- **Glass:** dark smoked glass (`.glass-panel`), opaque enough for clear reading. Modestly rounded rectangles (`--radius-md/lg`); pills only for compact actions.
- **Buttons:** primary = dark glass + fine white outline, gentle hover brightening. Secondary = quieter glass + hairline. Quiet = text-led with icon.
- **States:** hover brightens; pressed scales to 0.98; selected (`aria-pressed`) uses brighter fill + outline; disabled is dimmed (primary gets a dashed outline) and never looks broken; focus = 2px soft-white outline, 3px offset.
- **Icons:** `src/components/ui/Icon.tsx` — 24px grid, 1.5 stroke, round caps. Save = bookmark (never a heart). Compare = two-arrow symbol. Controls carry short visible labels; icon-only controls keep an accessible name.
- **Swatches:** round, name below; selected = thin white ring + small silver dot under the name. No tick.
- **Wordmark:** `OrbitWordmark` — spaced medium capitals; O almost closed with a tiny upper-right gap and a thicker crescent-like left edge. Must read O, not C.
- **Brand badges (B03):** ~25–30% smaller than the first generated preview, balanced by visual size, accurate artwork, soft shadow, no invented chrome.

## Typography
- **Manrope** variable (200–800), SIL OFL 1.1, bundled locally at `src/styles/fonts/` with `OFL.txt`. System sans fallback.
- Headings medium (500), moderate sizes — cars stay dominant. Body regular (400).
- Numbers regular-to-medium with tabular figures (`.t-num`, `.t-stat`). Preserve manufacturer model-name styling.

## Responsive
- Breakpoints: phone < 600px, tablet 600–1023px, desktop ≥ 1024px (content-specific queries allowed, e.g. the 900px design-check grid). Car cards adapt via a container query at 400px.
- Phone and desktop are variants of the same feature, never separate apps.
- No horizontal page overflow. Touch targets ≥ 44px even when the visible icon is small.
- Reserve image and value space (aspect-ratio boxes, reserved value widths) so layouts never jump.

## Motion
- Durations: `--duration-instant` 120ms, `fast` 200ms, `base` 350ms, `slow` 600ms, `brand` 800ms, `value` 1200ms. Easing: `--ease-standard`, `--ease-gentle`, `--ease-out`.
- Animated values: count up from zero (including prices) over ~1–1.5s with ease-out; text values type in with no cursor; gentle group stagger. Trigger on first appearance or car change only — never on scroll-back, panel return or toggles. Never animate model identifiers or dates.
- Screen readers receive final values only. Underlying final values drive filters/sorting/comparison.
- `prefers-reduced-motion`: final states immediately, no pulses or tracing (global CSS guard + `useReducedMotion`).
- Pause expensive work in hidden tabs. No sound anywhere.
