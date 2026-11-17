# Asset register

> **No production vehicle assets, brand badges or 3D models are verified or acquired yet.** Nothing below may be published until its status is `verified`. No purchases without explicit approval.

## Gate per car (reference §16)
Exact model/generation/year/trim/powertrain and UK configuration · live official destination · 3D web use permitted · usable downloadable format · geometry quality with separate paint and lighting materials · detail-camera suitability · reasonable runtime weight · matching exterior/interior/detail photos with permissions. Never pair an old asset with new-generation specs. If no suitable 3D asset exists, propose a replacement car.

## Register
| Asset ID | Car ID / exact version | Type | Source / author | Licence & permission evidence | File path | Size | Status | Checked on |
|---|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — | — |

No asset has passed the gate. No candidate files were downloaded into the repository.

## B01 — BMW 4 Series Coupé feasibility (2026-11-17)

**Outcome: BLOCKED.** No candidate is both licensed for browser-delivered, public-repository use and good enough for ORBIT close-ups.

### Target vehicle (proposed, pending a suitable asset)
- **BMW 420i M Sport Coupé, G22 LCI (facelift from 2024), UK 2026 model year.**
- Official destination: https://www.bmw.co.uk/en/all-models/4-series/coupe/bmw-4-series-coupe.html. Loaded in a browser on 2026-11-17: HTTP 200, title "2026 BMW 4 Series Coupé - 2-door Sporty Coupé", names "BMW 420i M Sport Coupé". Plain HTTP clients are refused (bot protection).
- Excluded identities: M4 (G82), Gran Coupé (G26), Convertible (G23), F32 (2013–2020). Pre-LCI geometry (2020–2023: different headlights and bumpers) must not be paired with 2026 specs.

### Candidates
Key: **[F]** verified from the listing/API · **[S]** stated by the creator or seller · **[?]** unknown. No file was inspected, because none passed the licence or quality checks, so download was not justified.

| # | Candidate | Identity | Price / licence | Public web + repo use | Quality | Verdict |
|---|---|---|---|---|---|---|
| 1 | [Low Poly BMW 4 Coupe Series 2020](https://sketchfab.com/3d-models/low-poly-bmw-4-coupe-series-2020-5243fd4631d54492acfe1c98c2c12352), giosassets (Sketchfab) | G22 pre-LCI shape **[S]**; trim unknown **[?]** | Free, CC BY 4.0 **[F]** | Allowed with attribution (CC BY permits redistribution) | 50,906 tris **[F]**, exterior only **[S]**. The thumbnail shows a toy-grade body: flat colour, no kidney-grille or headlight detail, simplified wheels **[F]**. Paint separation and light geometry unknown **[?]**. | Rejected: quality far below ORBIT close-ups and headlight tracing. |
| 2 | [2021 BMW 430i xDrive Coupé](https://sketchfab.com/3d-models/2021-bmw-430i-xdrive-coupe-4-series-3d507e8432494480b31bdc0dcdcf51d5), ddiaz-design (Sketchfab) | G22 **pre-LCI** M Sport, 430i xDrive (not a UK variant) **[S]** | Free, CC BY-NC-SA **[F]** | Doubtful. NonCommercial conflicts with a portfolio-linked site, and ShareAlike applies to our optimised file. The uploader runs a general model "repository" and copied BMW press text as the description, so their right to license it is **unverified** — a CC licence is only valid from the rights holder. | 92,166 tris **[F]**. The thumbnail looks convincing: M Sport body, detailed grille and headlights, glass, wheels **[F]**. Materials and rear unknown **[?]**. | Rejected: provenance and NC-SA, and pre-LCI. |
| 3 | [BMW 4-Series Coupe 2021 3D Model](https://sketchfab.com/3d-models/bmw-4-series-coupe-2021-3d-model-be106f9d84a044759af5bbd16b7f2ad1), MattDoesBlender (Sketchfab) | "2021" pre-LCI **[S]** | Free, CC BY-NC-SA **[F]** | Doubtful. "automated-upload" of a .rar with no stated source suggests a re-upload of someone else's model **[F]**. | 1,000,859 tris **[F]**. No thumbnail or preview processed **[F]**. | Rejected: provenance. |
| P1 | [BMW M440i Coupe 2021](https://sketchfab.com/3d-models/bmw-m440i-coupe-2021-2a23733103914d749e4c6b0352fb834c), SQUIR3D (Sketchfab Store) | M440i, pre-LCI **[S]** | **US$169.00, Editorial licence** **[F]** | Not permitted. Editorial material "cannot be used for any commercial or promotional use" and only in works that "comment on or criticize" the subject. All Sketchfab Store licences also forbid distributing in "a way that allows third parties to … download, extract or access the Licensed Material as a stand-alone file", and a browser-delivered GLB is extractable ([sketchfab.com/licenses](https://sketchfab.com/licenses), §2.2(b), §2.3). | 912,687 tris, interior included **[F]** | Rejected: licence. Also the wrong variant (M440i) and pre-LCI. |
| P2 | [BMW M440i Coupe 2025](https://www.renderhub.com/podshyvalov/bmw-m440i-coupe-2025), podshyvalov (RenderHub) | M440i LCI **[S, search snippet]** | Price unknown; listed under "Extended Use License (IP Restricted)" **[S, search snippet]** | Unknown | Unknown | Listing no longer loads ("Oops! That didn't work…"). |

Free G22 Coupé matches that were not shortlisted (wrong body or generation): M440i Gran Coupé uploads (G26), M440i Convertible (G23), and F32 models.

### Structural finding
Typical paid marketplace licences (Sketchfab Store shown above) forbid making the model extractable as a stand-alone file. That conflicts with a static site that ships a GLB to browsers, and with a public repository. Unless a seller grants written permission, a paid route needs either a licence that explicitly allows real-time web delivery or permission obtained by the owner. Only CC BY or CC0 assets with credible provenance fit the current hosting model as-is.

### Smallest decision to proceed (owner)
Choose one:
1. **Replacement-car check (recommended):** a bounded B01 re-run across the other shortlist cars for a current-generation, credibly sourced CC BY or CC0 model, reporting the first suitable one.
2. **Owner-obtained permission:** you contact a creator (e.g. ddiaz-design, or a paid seller of an LCI model) for written permission covering public web delivery and a public repository.
3. **Change the hosting constraint:** keep the model out of the public repository (e.g. a private asset source). This does not solve browser extraction, so it still needs a licence that allows real-time web use.

Types: `model3d`, `card-photo`, `studio-thumbnail`, `exterior`, `interior-driver/front/rear/boot`, `detail`, `brand-badge`.
Paths: `public/assets/cars/[car-id]/{model,exterior,interior,details,thumbnails}/`, badges in `public/assets/branding/`.
Status values: `unverified` · `in-review` · `verified` · `rejected`.

## Non-vehicle assets in use
| Asset | Path | Licence | Status |
|---|---|---|---|
| Manrope variable font (latin) | `src/styles/fonts/manrope-latin-wght-normal.woff2` | SIL OFL 1.1 (`src/styles/fonts/OFL.txt`) | verified |
| ORBIT mark / wordmark | `public/assets/branding/orbit-mark.svg`, `src/components/navigation/OrbitWordmark.tsx` | Original to this project | verified |

## B01 (continued) — replacement-car check (2026-11-17)

**Outcome: BLOCKED — no candidate meets every requirement.** One near-miss (A1) is ready for an owner decision.

### Screening (Sketchfab downloadable search, all eight shortlist cars)
- **Discarded:** NonCommercial licences; uploads stating they were ripped from games; generic "repository" accounts; and identical face counts under different usernames, which indicate re-uploads of one unknown source (e.g. 253,890 / 489,304 / 373,640 / 369,603 / 1,222,429 faces each appear twice).
- **No usable free leads found for:** X3 (G45), 911 Carrera (992.2; only GT3/GT3 R/Dakar variants), Macan Electric, CLE Coupé, GLC (X254), or Taycan with clear provenance.

### Detailed candidates
Key: **[F]** verified from the listing, API or official page · **[S]** stated by the creator or seller · **[?]** unknown. No 3D file was downloaded or inspected.

| # | Candidate | Vehicle identity | Licence: public site / public repo | Quality evidence | Verdict |
|---|---|---|---|---|---|
| A1 | [2023 BMW 3 Series](https://sketchfab.com/3d-models/2023-bmw-3-series-82534fdddd7e46e4bdb202d6c1d3c0e7), solid3ddd (Sketchfab, free) | "2023 BMW 320i xDrive base model" **[S]**: G20 LCI saloon, non-M Sport bumpers **[F, thumbnail]**. UK trim match unconfirmed **[?]**. | CC BY 4.0 **[F]**. Site: allowed with attribution. Repo: allowed (CC BY permits redistribution). Provenance credible: creator's own description, a derivative police variant, non-collapsed .blend "included in additional files" **[F]**. BMW trademarks are not covered by any model licence. | 2,693,212 tris / 1.38M verts **[F]**, full interior and opening doors **[F, thumbnail]**. Body, LCI headlights, wheels and glass look convincing in the thumbnail **[F]**. Paint/headlight material separation, file size and textures unknown **[?]**. Needs heavy mobile optimisation (decimation, interior removal or LOD, Draco/Meshopt). | **Fails vehicle match:** BMW UK's 3 Series Saloon page is now **"BMW 3 Series Saloon (G50)"** **[F]**, so the G20 is the previous generation. |
| A2 | [Mercedes C-class W206 (free)](https://www.cgtrader.com/free-3d-models/car/luxury-car/mercedes-c-class-w206), CGTrader | W206 **[S, search snippet]**; year/trim **[?]** | CGTrader Royalty Free **[S]**. Site: only as an "Incorporated Product" with "commercially reasonable measures to prevent the end user from gaining access", e.g. encryption (§21A.2–21A.3) **[F, terms]**. Repo: raw file **not** allowed. Provenance **[?]**. | glTF and .blend (~178 MB) **[S]** | Unresolved: listing page blocked (CloudFront), provenance and identity unknown. |
| A3 | [Mercedes-Benz C-Class W206 AMG-Line 2022](https://sketchfab.com/3d-models/mercedes-benz-c-class-w206-amg-line-2022-21393b5f402543848db2f26f95a2e9fa), ceron_alex (Sketchfab, free) | W206 AMG Line 2022 **[S]** | CC BY-NC **[F]**: NonCommercial unresolved for a portfolio-linked site. No provenance statement. | 1,436,926 tris **[F]** | Rejected: NC plus unknown provenance. |

Also rejected: [Mercedes-Benz W206 C220](https://sketchfab.com/3d-models/mercedes-benz-w206-c220-c0ef31daf7cf4a8bada4b56005c19e83) (description: "The 3D model was ripped from a BeamNG.drive"), and Sketchfab "Free Standard" models. Free Standard falls under the Sketchfab Store agreement, whose §2.2(b) forbids distributing in a way that lets third parties "download, extract or access" the file.

### Paid alternatives (not purchased, sellers not contacted)
| # | Listing | Price / licence | Public site | Public repo | Notes |
|---|---|---|---|---|---|
| P1 | [Mercedes-Benz C-class AMG-line 2021](https://www.cgtrader.com/3d-models/car/car/mercedes-benz-c-class-amg-line-2021), CGTrader | US$129, Royalty Free **[S, search snippet]** | Possible as an Incorporated Product with an encrypted or proprietary asset file (§21A.3). **Unresolved**: encrypted GLB delivery would need written confirmation from the seller or CGTrader. | Not allowed (raw files) | Naming matches Hum3D's catalogue **[?]**. Pre-facelift W206; current UK status unconfirmed because Mercedes UK blocks automated access. Formats: 3ds Max, Blender, OBJ… **[S]**. |
| P2 | [BMW M440i Coupe 2021](https://sketchfab.com/3d-models/bmw-m440i-coupe-2021-2a23733103914d749e4c6b0352fb834c), SQUIR3D (Sketchfab Store) | US$169, Editorial **[F]** | Not allowed (editorial-only) | Not allowed | Kept for reference only. |

### Licence summary (verified terms)
- **CC BY 4.0:** public interactive site ✓ and public repository ✓, with attribution. Trademarks are not licensed.
- **Sketchfab Store (Standard / Free Standard / Editorial):** browser-extractable delivery ✗ (§2.2(b)); Editorial ✗ for promotional use (§2.3). Source: https://sketchfab.com/licenses
- **CGTrader Royalty Free:** interactive use ✓ only as a protected Incorporated Product (§21A.2–3); public repository ✗; buyer responsible for trademark clearance (§20.3). Source: https://www.cgtrader.com/pages/terms-and-conditions

### Smallest decision to proceed (owner)
1. **Accept A1 as the first car, as the previous-generation 3 Series:** 2023 BMW 320i (G20 LCI) with G20 data only. The destination becomes a clearly labelled BMW UK range page (G50) or an approved-used listing, to be verified. Next step: download and inspect the file, which needs a free Sketchfab account API token.
2. **Allow a private-asset route:** keep model files out of the public repository and deliver an encrypted or proprietary asset, so a paid Royalty Free model (e.g. P1, US$129) becomes possible. Needs a budget decision plus seller confirmation of web delivery, and the owner should check the current UK C-Class page manually.
