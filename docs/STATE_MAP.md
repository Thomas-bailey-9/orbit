# State map

Reference §18 is authoritative. Saved/shared state uses stable IDs only.

## Navigation
Opening (once per session; Skip → finished selection) → Brand selection → Model panels → Loading → Headlights → Reveal → Showroom → Exterior → Interior → Specifications → Final section → external official site (new tab).
Alternate entries: Browse all cars, Comparison overlay, Saved cars panel, Shared link (model + colour → direct showroom, no intro, Replay reveal offered).

## Overlays
Specifications panel/sheet, comparison overlay, detail photo overlay, saved-cars panel, share panel, help (under More), full-screen viewer. Closing an overlay closes only that overlay.

## Persist vs reset
| Trigger | Preserve | Reset / change |
|---|---|---|
| Close specs / comparison / detail photo | Car, configuration, camera, scroll | That overlay only |
| Back from 3D detail | Previous angle/zoom, appearance | Animate back ~0.7s |
| Reset view | Paint, lighting, headlights | Default angle + zoom |
| Back to 360° | Car, appearance | Default three-quarter camera |
| Reverse scroll into showroom | Previous viewer state | Reverse scroll presentation |
| Change paint | Model, lighting, headlights, saved record until Update | Camera to default, then paint |
| Change model | Valid browsing context | New model defaults; no incompatible options carried |
| Return to brand panels | Last-viewed highlight per brand | No automatic opening |
| Return from external tab | Everything normally | If recovery needed: camera default only |
| Click ORBIT | Saved cars | Explicit opening replay |
| Shared link | Requested valid model/colour | Direct showroom; invalid values explained |

## Storage
- Session: opening seen, first headlight sequence per car, per-car interior view/hotspot, browsing position.
- Device (localStorage): saved cars `{carId, colourId}` — one per exact model/version. Failures must not break browsing.
