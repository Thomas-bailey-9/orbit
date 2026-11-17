# ORBIT — Project reference and approved decisions
Version 1.0 · 17 November 2026
Status: planning reference. No application has been built or deployed.
Owner: Thomas Bailey.

## 1. Purpose and authority
ORBIT is a silent, cinematic, independent car-discovery website. Visitors choose a brand, explore a real 3D car, inspect photographs and specifications, compare two cars, save configurations locally, and continue to an official manufacturer or dealership website. ORBIT takes no payments and collects no enquiry details.

This document consolidates the conversation's approved decisions, not the contents of external files. Screenshot references below identify visual references; they have not been re-audited as source assets in this consolidation.

Priority: latest explicit user decisions > this consolidated reference > individual generated screenshots > earlier suggestions. Written corrections override screenshot artefacts. Generated cars, interiors, prices and model names are illustrative and must never be used as evidence of real specifications.

The user authorises recommended defaults for remaining routine design choices. This does not authorise purchases, publication, invented facts or substitution of major approved features. No additional feature brainstorming is needed before preparing scoped briefs.

## 2. Scope
Initial brands: BMW, Porsche, Mercedes-Benz. Aim for three distinct models per brand, preferably sporty car, saloon and mid-size SUV; adapt to the real range. Architecture must accept more brands/models without duplicated pages.

UK market, GBP indicative prices. Official model pages are the preferred destinations. They are not proof that an exact configured vehicle is in stock. Purchases/enquiries happen externally. No accounts, enquiry forms, checkout, sound, recently-viewed feature or automatic related-car recommendations.

Core journey:
Opening → brand selection → model panels → asset loading → headlight introduction → click Reveal → 3D showroom → exterior → interior → specifications → final official link.
Alternate paths: Browse all cars, comparison, saved cars, shared model-and-colour links.

## 3. Shared design rules
Primary typography/spacing reference: approved car-selection preview.
- Precise slightly geometric sans-serif, medium weight for headings; regular-to-medium numeric values with tabular alignment.
- Moderate heading sizes; cars remain dominant. Preserve manufacturer model-name styling.
- Near-black/charcoal, soft white and silver. Studio has photographic depth; informational sections have quieter charcoal backgrounds with soft transitions.
- Smoked glass sufficiently opaque for clear reading. Modestly rounded rectangular panels; pills for compact actions.
- Primary buttons: dark glass, fine white outline, gentle hover brightening.
- Fine consistent outline icons with softly rounded ends and short visible labels. Bookmark = Save; distinct comparison icon. Do not use hearts for Save.
- Ice blue only for detail hotspots and corresponding content. Muted green/red are reserved for eligible comparison differences.
- Brand badges approximately 25–30% smaller than the first generated brand preview, balanced by visual size; accurate artwork, soft shadow, no invented chrome/glare.
- ORBIT wordmark: spaced medium-weight capitals. O almost closed, tiny intentional gap, one thicker crescent-like silver edge resembling a moon/planet. Must read O, not C.
- Tagline: “Every angle. Your next drive.”
- Exact font file, colour values, breakpoints and spacing tokens remain to be specified during foundation preparation; do not claim these were selected.

## 4. Opening and brand selection
Opening silent, no cars/headlights. Same background persists into selection.
| Time | Behaviour |
|---|---|
| 0–0.3 s | Near-black studio and faint satin floor appear. |
| 0.3–1.2 s | Silver O traces into view. |
| 0.9–2.0 s | R B I T fade left-to-right, overlapping slightly, no blur or individual letter movement. |
| 1.8–2.5 s | Tagline fades in. |
| 2.5–3.2 s | Wordmark and tagline move upwards together and become smaller. |
| 3.0–3.7 s | Selection heading, all brand buttons and Browse all cars appear together with fade and small upward movement. |

Desktop brands in a row; phones stacked. Future brands wrap into rows on desktop. No extra waiting.
Skip intro bottom-right goes directly to finished usable selection state. Run automatically once per browsing session. Normal returns show finished selection immediately. Clicking ORBIT deliberately replays it without clearing saved cars.
Reduced motion: finished selection without tracing/movement. Reserve layout space; load lightweight logo/font assets, not all car assets.

Brand button: gentle enlargement, glass reflection, silver highlight. Selecting transitions over ~0.8 s; brand logo settles upper-left beside ORBIT. Show model names/actions immediately with stable shaded image placeholders if photos are pending. No wheel loader merely for brand-panel photographs.
Back/change-brand stays available. Remember last viewed model highlight per brand, but do not create a Recently viewed feature.

## 5. Car selection and browsing
Whole-car architectural photographs, different locations with coherent palette/style. Three editorial columns desktop, stacked phone.
Card: actual model/version, brief factual character/use description, powertrain, indicative price, Explore car, Save, Compare.
Photo/name/Explore open car; secondary actions independent. Hover/focus: slight photo zoom, brighter border, more prominent Explore.
Cards enter with small upward fade and gentle stagger. Restore browsing position and last-viewed highlight on return.
Photo failure: matching studio thumbnail; if both unavailable, clean labelled placeholder. Actions remain usable.
Browse all cars: Brand/Body style/Powertrain dropdowns, Reset filters and count. Stacked compact dropdowns phone. No matches: message plus Reset filters. No automatically relaxed filters.
Tap Save → Saved. Tap again removes with Undo. Replacing a previously saved colour still requires confirmation.
Return to existing cards restores completed price values, not fresh count-ups.

## 6. Loading
Small brand logo above neat rotating alloy-wheel icon, 2–3 px silver progress line, “Preparing your showroom”. Progress truthful; indeterminate when not measurable.
Skip loader if assets ready. Always provide Back to cars.
After ~8 s offer Continue with photos while loading continues. Choosing photos must not later force a switch to 3D.
When ready, fade loading elements out on same dark background before headlights. No fake minimum delay.
Cancel stale navigation results so a finished download cannot reopen a car the visitor left.

## 7. Headlights and full reveal
First normal opening of each car per session: ~1.8 s flash/pause/trace sequence.
- Brief controlled headlight flash, dark pause, mirrored tracing from inner edges by grille towards outer edges.
- Follow each actual model's light geometry.
- Reveal the car button fades in as tracing finishes, usable immediately.
- Waiting lights have subtle animated softness/spread around sharp stable LEDs; not repeated flashing or obvious rhythmic pulsing.
- Pause animation in hidden tab; reduced motion steady lights.
Click Reveal begins ~2 s overhead lighting rise and camera movement from front to front three-quarter. Gentle acceleration/deceleration. Satin floor soft reflection. Model information appears as camera/lighting settle; controls usable immediately as they fade in. Waiting glow becomes steady light.

Repeated normal visits use shorter transitions. Switching models inside showroom uses dim/swap/relight, not full headlight replay. Shared links bypass intro and offer Replay reveal.
Replay reveal is an explicit user action; never autoplay it after recovery.

## 8. Showroom
Large centred car; upper-left model, short description, approximate price/info and key figures. On phones name/price above car, key figures below.
Three consistent headline categories: acceleration, power, fuel economy or electric range with correct units and basis. Same slots do not imply unlike quantities are comparable.
Floating glass toolbar; Front, Side, Rear, Reset, zoom, paint, lighting, headlights, Explore details, Change model, full-screen, Save, Share and More arranged responsively.
Drag to explore receives fine soft-white outline. Phone guidance: “Move the sliders to explore every angle”, brief first-use hint; help remains under More.
Desktop wheel scroll moves page, never unexpected zoom. Direct drag rotates horizontally with slight vertical adjustment and gentle release momentum.
Angle shortcuts ~0.6 s; user dragging immediately takes over without jumps. Standard Side is vehicle's physical left side across models.
Reset = default three-quarter angle + zoom only. Preserve colour, light setting and headlights.

### Phone controls
Both iPhone and Android: always-visible horizontal Rotate slider below car and vertical Viewing height slider right, clear of car. Fine 1–2 px muted-silver tracks, small round frosted balls, larger invisible touch targets.
Horizontal direct position spans complete 360°, endpoints same orientation. Vertical limited pitch range. No snapping or release drift for sliders; positions match presets/reset. Direct dragging retains gentle momentum.
Horizontal direct swipe rotates; vertical swipe elsewhere scrolls; pinch zoom within sensible limits. Avoid intercepting unrelated page gestures.
Full-screen retains sliders, zoom, Reset, Exit; other actions More. Clear Exit; preserve context when exiting.

## 9. Paint and lighting
Three chosen colours per model (not chosen yet), one wheel design, one interior.
Round labelled swatches. Selected = fine white ring and small silver dot UNDER name, not tick.
Selecting new paint: camera smoothly resets to default angle, then paint transitions, ~0.8–1 s total. Selecting existing paint does nothing. Latest rapid selection wins without queue.
Paint name types into place. Saved configuration remains unchanged until explicit update; show Unsaved colour change + Update if current paint differs. Update invokes overwrite confirmation.
Soft/Bright studio lighting blends ~0.5 s without camera change. Headlight toggle short fade, not trace replay.
Phone paint tray above toolbar, keep car visible. Two trays in mockup are illustrative review state, not requirement to keep both always open.
Photographic architecture/interior assets do not automatically recolour. Label pictured finish if it differs; do not tint whole photograph.

## 10. Details, exterior, interior
Hotspots hidden until Explore details. Hover/focus gently pulses and turns subtle ice-blue; corresponding detail row highlights. Click gives one pulse then steady selected state. Reduced motion no pulse.
Camera approaches detail ~0.7 s. Information fades near end: title + two short accurate points. Fixed close-up camera; phone sliders hidden.
View detail photo opens zoomable overlay; close returns to same detail. Back to full car restores previous angle/zoom ~0.7 s.
Wheel has detailed close-up even though no wheel configuration.

Exterior: showroom shifts sideways with scroll over roughly half a screen; stops with scroll. Architecture photo crossfades as showroom moves away, no invented geometric morph. Scroll upward reverses and restores previous showroom view.
Section navigation Overview / Exterior / Interior / Specifications appears below showroom. Moving silver active underline plus separate thin silver scroll-progress line.
Back to 360° returns default angle while preserving appearance.

Interior: exterior slides up, cabin image revealed. Driver-eye view behind wheel for intended UK car; exact interior matches selected version. Thumbnail views Driver / Front seats / Rear seats / Boot. Crossfade ~0.35 s in stable image box. Current image remains during loading, subtle indicator; latest selection wins.
Hotspots relevant to view; none if no useful details. Enlarge image reuses photo overlay. Remember selected view and hotspot state per car during visit.
Three concise detail groups: upholstery, controls, trim. No unsupported equipment claims. One chosen interior, no interior customisation.

## 11. Specifications and animated values
Large car image and three key figures. Full specs glass side panel desktop, readable bottom sheet phone. Performance, powertrain, practicality, dimensions as appropriate. Source/check date information retained. Missing values “Not available”.
Approx. £X price and previously agreed simple information tooltip; no expanded price-information panel. Price basis must not misrepresent depicted options.
All numeric stats INCLUDING prices count from zero to final in ~1–1.5 s, gently easing. Decimal precision and currency commas correct. Text specs such as RWD/AWD/Automatic type in without blinking cursor.
Use gentle group stagger, stable reserved widths/tabular numbers. First appearance or car change triggers; no repeated replay on scroll back, panel return or difference-toggle. Do not animate model identifiers or dates as if performance figures.
Final underlying values always power filters/sorting/comparison; accessibility reads final values without announcing each animation tick.
Reduced motion final values immediately.

## 12. Comparison
Choose up to two cars across brands. Compare on a car selects first, opens second picker. Change car over either column preserves other. Prevent comparing same exact record to itself.
Full-screen overlay desktop, two readable compact columns phone. Matching static three-quarter views in selected colours, consistent framing, “Images not to scale”.
Images/name/approximate price/official links retained when differences-only enabled. Matching specification rows collapse smoothly. Preserve alignment and do not replay number animations on toggles.
Muted green/red and text labels only for meaningful like-for-like measurements; neutral for preference-based or incomparable quantities. Greater power is not automatically better. No overall winner.
Glass legend alongside desktop, above table phone. Missing values neutral “Not available”. Fuel economy cannot be ranked directly against electric range; avoid ranking unlike test standards.
Close restores prior car, angle, zoom, colour and scroll.

## 13. Saved cars, sharing, help
Saved side panel desktop; usable full-width responsive panel phone. Device-local, no account. Nonzero count in navigation.
One saved entry per exact model/version. Store selected paint. Same configuration: Already saved. Changed: “This will replace your previous saved configuration.” Cancel / Update saved car.
Entry actions Explore, Compare, Official website, Remove. Explore restores 3D with saved colour. Remove immediate with Undo. Empty: short message + Browse cars.
No local-storage capacity/error should break browsing; give clear feedback if saving fails.
Share encodes stable model ID + colour. Native share where appropriate or copy-link panel; show success only after successful operation; manual copy fallback.
Shared URL direct to specified showroom after actual loading, no forced opening; Replay reveal available. Invalid model/colour handled gracefully, explain fallback.
Help under More covers desktop drag, phone sliders, page scrolling, zoom and Reset.

## 14. Final section and external return
Large studio image in chosen paint, actual model name, Explore at [brand] official link, new-tab disclosure, Share, Continue exploring → Browse all cars. Compact ORBIT explanation footer; no related cars.
Official CTA: single restrained silver border sweep first entering view, no loop; reduced motion simple highlight.
Prefer exact official model/version destination. Known unavailable page → clearly labelled manufacturer range fallback with explanation, not silent redirect.
Returning from external tab keeps full state. Pause expensive rendering while hidden. If browser unloads or 3D fails, restore car/paint/lighting/headlights and default three-quarter camera. Reinitialise viewer before full reload, no loops or replay intro.
3D failure: static matching photograph, Retry 3D / Continue with photos. Reduce demanding effects first. No forced upgrade to 3D after visitor chose photographs.

## 15. Screenshot reference register
References are approved design concepts, not exact production assets.
| Screen | Reference filename | Required corrections |
|---|---|---|
| Opening | ORBIT cinematic logo reveal storyboard.png | O smaller gap, thicker crescent side; final 3.7 s timing overrides static frames. |
| Brands | Orbit automotive brand selection screen.png | Smaller natural badges, soft shadows; no excessive Mercedes chrome. |
| Models | Orbit BMW model selection experience.png | Approved layout; real cars/names/data replace placeholders. |
| Loader | Orbit automotive loading screen.png | Progress line thinner, 2–3 px. |
| Headlights | Orbit’s Cinematic Headlight Reveal.png | Actual per-car signature; live subtle waiting glow. |
| Reveal | Orbit Blue Coupe Reveal.png | Fine white Drag to explore outline. |
| Showroom | Orbit interactive automotive showroom concept.png | Slimmer phone tracks/balls; consistent car; bookmarks not hearts. |
| Detail | Orbit wheel design close-up.png | Actual matching wheel, accurate two points. |
| Paint | Orbit paint and lighting studio.png | Ring + silver dot below name, no tick. |
| Exterior | Blue coupe exterior detail showcase.png | Linked pulse/ice-blue selected hotspot feedback. |
| Interior | Orbit interior discovery preview.png | True driver-eye initial view; consistent nav/icons and actual matching cabin. |
| Specs | ORBIT specifications concept with blue coupe.png | Verified values; missing = Not available. |
| Compare | Orbit premium two-car comparison.png | Lighter numeric weight, subdued red/green; fictional data not reused. |
| Saved | Saved cars: blue coupe, silver SUV.png | Original navigation; correct Compare icon; no invented new menu sections. |
| Final | Orbit blue coupe final section.png | Actual car/name, selected paint and relevant official link. |
| Browse | Orbit premium automotive showroom UI.png | Real records and expandable data-driven grid. |
| Small states | ORBIT automotive interaction details.png | Example URL/car replaced; success only after action succeeds. |

## 16. Provisional car shortlist and asset gate
Previous research suggested BMW 4 Series Coupé, 3 Series Saloon, X3; Porsche 911 Carrera, Taycan saloon, Macan; Mercedes-Benz CLE Coupé, C-Class Saloon, GLC SUV.
This is a shortlist, NOT final asset approval, verified bestseller ranking, guaranteed stock availability or user-approved exact trim list. Official information can change and needs verification before data entry.

| Brand | Candidate | Official destination identified in earlier research |
|---|---|---|
| BMW | 4 Series Coupé | https://www.bmw.co.uk/en/all-models/4-series/coupe/bmw-4-series-coupe.html |
| BMW | 3 Series Saloon | https://www.bmw.co.uk/en/all-models/3-series/saloon/bmw-3-series-saloon.html |
| BMW | X3 | https://www.bmw.co.uk/en/all-models/x-models/x3/bmw-x3.html |
| Porsche | 911 Carrera | https://models.porsche.com/en-GB/model-start/911 |
| Porsche | Taycan saloon | https://www.porsche.com/uk/models/taycan/configure/ |
| Porsche | Macan | https://www.porsche.com/uk/models/macan/configure/ |
| Mercedes-Benz | CLE Coupé | https://www.mercedes-benz.co.uk/passengercars/models/coupe/cle/overview.html |
| Mercedes-Benz | C-Class Saloon | https://www.mercedes-benz.co.uk/passengercars/models/saloon/c-class/overview.html |
| Mercedes-Benz | GLC SUV | https://www.mercedes-benz.co.uk/passengercars/models/suv/glc/overview.html |

Before confirming each: exact model/generation/year/trim/powertrain and UK configuration; live official destination; allowed 3D web use; downloadable usable format; geometry quality, separated paint and lighting materials; detail-camera suitability; reasonable runtime weight; matching exterior/interior/detail photos and use permissions.
Choose petrol/electric Macan and exact C-Class/GLC powertrain families explicitly. No old asset with new-generation specifications.
Three actual colours, one wheel and one interior per car remain unresolved.
No 3D assets have been verified or acquired. Asset budget unresolved; research free options first, flag paid candidates, no purchase authority.
If suitable 3D asset unavailable, propose replacement car rather than claiming a photo is full 360°. Photos remain runtime fallback, not substitute for the intended primary experience.

## 17. Code organisation plan
Proposed React + TypeScript; exact stack/dependencies/3D renderer to be checked and pinned during technical setup, not claimed settled.
- src/app/{routing,state,layout}
- src/data/brands + src/data/cars/{bmw,porsche,mercedes}
- src/styles/{tokens,typography,global}
- src/components/{ui,navigation,car-card,animated-values,photo-overlay}
- src/features/{opening,brand-selection,model-selection,browse-cars,loading}
- src/features/showroom/{scene,reveal,camera,controls,paint-lighting,hotspots,recovery}
- src/features/{exterior,interior,specifications,comparison,saved-cars,sharing,control-help,final-section}
- src/utilities and tests
- public/assets/branding; public/assets/cars/[stable-car-id]/{model,exterior,interior,details,thumbnails}
- docs: brief, design rules, decisions, assets, state map, build status, file map, section briefs.

One reusable experience; do not fork screen implementations by brand. Feature-specific component/styles/logic co-located. Shared primitives only for genuine reuse; do not create meaningless tiny files.
Central records: stable ID, brand ID, exact version, category, powertrain, price/basis/check date, typed specs/units/sources, colour IDs/material values, asset paths/rights, camera anchors/hotspots, official destination.
Do not hard-code three brands or three models into routing/filter logic. Saved/shared references use stable IDs, never display strings.
Phone/desktop are responsive variants of same feature, not separate applications.

## 18. State and return contract
| Trigger | Preserve | Reset/change |
|---|---|---|
| Close specs/comparison/detail photo | Prior car/configuration/camera/scroll | Close only relevant overlay. |
| Back from 3D detail | Prior full-car angle/zoom, appearance | Animate return ~0.7 s. |
| Reset view | Paint, lighting, headlights | Default angle and zoom. |
| Back to 360° | Selected car and appearance | Default three-quarter camera. |
| Reverse scroll into showroom | Previous viewer state | Reverse scroll presentation. |
| Change paint | Model, lighting/headlights, saved record until update | Camera default then paint. |
| Change model | Valid browsing context | New model defaults, default angle; no incompatible options carried. |
| Return brand panels | Last-viewed highlight | Show selection panels, no automatic opening. |
| Return from external tab | All state normally | If recovery needed, camera default only. |
| Click ORBIT | Saved cars | Explicit opening replay. |
| Shared link | Requested valid model/colour | Direct showroom, no automatic intro. |

## 19. Low-waste build plan
Planning document only. Do not implement all stages merely because this file exists.
Build one complete car before populating nine; use no fabricated final data.
Every task brief states goal, relevant files to read, screenshot and corrections, behaviour, responsive rules, allowed scope, prerequisites, checks and concise handoff.
Read relevant files first, reuse components, edit targeted code, avoid unrelated refactors. Do not paste full source into chat. Update short current status and decisions rather than accumulating full transcript.
Run meaningful focused checks per change; full integrated checks at milestones. Folder separation helps navigation but cannot guarantee token savings.
Use one consistent numbering below; conversational Section numbers were refinements, not the build numbering.

| Batch | Deliverable | Key dependencies |
|---|---|---|
| B00 | Foundation/docs/shared UI/data contract | This reference; actual design tokens to settle. |
| B01 | One-car asset feasibility | Verified asset and permission evidence. |
| B02 | Opening | B00 |
| B03 | Brand selection | B00, B02 |
| B04 | Model selection/cards | B00, B03 |
| B05 | All cars/filters | B04 shared cards |
| B06 | Loader and cancellation | B00 asset state contract |
| B07 | Basic genuine 3D viewer | B01, B06 |
| B08 | Headlight sequence | B07 actual light geometry |
| B09 | Full reveal | B08 |
| B10 | Camera/mobile/full-screen controls | B07, B09 |
| B11 | Paint/lighting | B07, B10 material contract |
| B12 | Detail camera/photo overlay | B10, detail assets |
| B13 | Exterior/scroll navigation | B12, exterior assets |
| B14 | Interior | B12 shared photo overlay |
| B15 | Specifications | Verified typed car data |
| B16 | Shared animated values | Existing value components, B15 |
| B17 | Two-car comparison | At least two verified data records; B04, B15 |
| B18 | Saved configurations | Stable IDs/config state, B11 |
| B19 | Sharing and help | B10, stable routing |
| B20 | Final official link section | Verified destination, B11 |
| B21 | Recovery/restoration integration | Viewer lifecycle; recovery hooks designed from B06 |
| B22 | Remaining verified collection | Working one-car system, each asset gate passed |
| B23 | Integrated validation | All implemented scope |

Design control-help, empty, loading and error states alongside features, even if final integration is later. B17 may use explicit development fixtures during construction, never publish fictional facts.

## 20. Acceptance and open work
Foundation accepted when reusable styles/components and data contracts are documented; section work can locate relevant files without repository-wide rereads.
Opening: 3.7 s timeline, usable Skip, session return, no car assets blocking.
Selection: keyboard/touch actions independent; image fallback stable; brand addition works without screen duplication.
Viewer: genuine full rotation, responsive interruption, correct phone scrolling, camera reset semantics and accurate selected material.
Content: one exact version throughout; factual data has source/check date, assets have recorded rights.
Comparison: aligned units, neutral missing/incomparable values, two columns usable on phone.
Persistence: overwrite/cancel/Undo, valid share links, recovery preserves selections.
Performance/accessibility: pause hidden/off-screen work, reduced motion, keyboard focus/labels, stable layouts, no sideways page overflow.

Next planning deliverables:
1. Extract this approved reference into the brief/design-rules/decisions/state-map structure when preparing the actual handoff package.
2. Write bounded section briefs using the B00–B23 map and approved screenshot corrections.
3. Verify first-car assets and exact generation before locking content; record budget decision if paid assets needed.
4. Choose real three-colour/wheel/interior sets and gather verified data.
5. Technical versions, exact fonts/tokens and deployment destination remain open. No publication authorised by this document.

Current completed work: concept, visual review, behaviour refinement, consolidated planning reference.
Current implementation status: not started. No purchased assets, verified 3D models or generated application code.

