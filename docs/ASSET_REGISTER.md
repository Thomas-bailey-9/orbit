# Asset register

> **No production vehicle assets, brand badges or 3D models are verified or acquired yet.** Nothing below may be published until its status is `verified`. No purchases without explicit approval.

## Gate per car (reference §16)
Exact model/generation/year/trim/powertrain and UK configuration · live official destination · 3D web use permitted · usable downloadable format · geometry quality with separate paint and lighting materials · detail-camera suitability · reasonable runtime weight · matching exterior/interior/detail photos with permissions. Never pair an old asset with new-generation specs. If no suitable 3D asset exists, propose a replacement car.

## Register
| Asset ID | Car ID / exact version | Type | Source / author | Licence & permission evidence | File path | Size | Status | Checked on |
|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — |

Types: `model3d`, `card-photo`, `studio-thumbnail`, `exterior`, `interior-driver/front/rear/boot`, `detail`, `brand-badge`.
Paths: `public/assets/cars/[car-id]/{model,exterior,interior,details,thumbnails}/`, badges in `public/assets/branding/`.
Status values: `unverified` · `in-review` · `verified` · `rejected`.

## Non-vehicle assets in use
| Asset | Path | Licence | Status |
|---|---|---|---|
| Manrope variable font (latin) | `src/styles/fonts/manrope-latin-wght-normal.woff2` | SIL OFL 1.1 (`src/styles/fonts/OFL.txt`) | verified |
| ORBIT mark / wordmark | `public/assets/branding/orbit-mark.svg`, `src/components/navigation/OrbitWordmark.tsx` | Original to this project | verified |
