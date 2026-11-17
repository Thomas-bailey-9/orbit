/**
 * ORBIT car-data contract.
 *
 * Rules:
 * - Unknown information is `null` or an explicit `{ kind: 'unavailable' }` — NEVER 0.
 * - Saved/shared references use stable IDs, never display strings.
 * - Nothing here may be filled from generated screenshots; every fact needs a source and check date.
 * - Routing/filters must read these records; do not hard-code brands or model counts.
 */

/** ISO calendar date, e.g. "2026-11-17". */
export type IsoDate = string;

export type BrandId = string;
export type CarId = string;
export type ColourId = string;

export type VerificationStatus = 'unverified' | 'in-review' | 'verified' | 'rejected';

/** Where a fact came from and when it was last checked. */
export interface SourceRef {
  url: string | null;
  label: string | null;
  checkedOn: IsoDate | null;
}

/* ---------- Brands ---------- */

export interface BrandRecord {
  id: BrandId;
  /** Display name, preserving manufacturer styling. */
  name: string;
  /** Display order on the brand-selection screen. */
  order: number;
  /** Brand badge artwork; null until an accurate, permitted file is recorded. */
  logo: AssetRef | null;
}

/* ---------- Classification ---------- */

export type BodyStyle = 'coupe' | 'saloon' | 'suv' | 'estate' | 'hatchback' | 'convertible' | 'other';
export type Powertrain = 'petrol' | 'diesel' | 'mild-hybrid' | 'plug-in-hybrid' | 'electric';

/* ---------- Price ---------- */

export interface PriceInfo {
  /** Whole GBP. null = not yet verified (displayed as "Approx. £—"). */
  amount: number | null;
  currency: 'GBP';
  /** What the figure represents, e.g. "On-the-road from price, standard specification". */
  basis: string | null;
  source: SourceRef;
}

/* ---------- Specifications ---------- */

export type SpecGroup = 'performance' | 'powertrain' | 'practicality' | 'dimensions';

export type SpecUnit =
  | 's'      // seconds (0–62 mph)
  | 'hp'
  | 'PS'
  | 'kW'
  | 'Nm'
  | 'mph'
  | 'mpg'
  | 'miles'
  | 'L'
  | 'mm'
  | 'kg'
  | 'kWh'
  | 'g/km'
  | 'seats';

export type SpecValue =
  | { kind: 'number'; value: number; unit: SpecUnit; decimals: number }
  | { kind: 'text'; value: string }
  | { kind: 'unavailable' };

/**
 * How a value may be compared (B17). 'neutral' = preference-based or incomparable;
 * greater power is not automatically "better".
 */
export type ComparisonRule = 'higher-favourable' | 'lower-favourable' | 'neutral';

export interface SpecEntry {
  /** Stable key, e.g. "acceleration-0-62", "power", "boot-capacity". */
  id: string;
  group: SpecGroup;
  label: string;
  value: SpecValue;
  /** Test standard or basis, e.g. "WLTP combined". Unlike bases must not be ranked. */
  basis: string | null;
  comparison: ComparisonRule;
  source: SourceRef | null;
}

/** The three showroom headline slots. Same slot ≠ comparable quantities. */
export interface HeadlineSpecs {
  acceleration: string; // SpecEntry.id
  power: string;        // SpecEntry.id
  economyOrRange: string; // SpecEntry.id (fuel economy OR electric range)
}

/* ---------- Assets ---------- */

export interface AssetRights {
  /** Where the file came from (site, author, store). */
  origin: string | null;
  licence: string | null;
  /** Link or note proving web use is allowed. */
  permissionEvidence: string | null;
  status: VerificationStatus;
}

export interface AssetRef {
  /** Path under public/assets/cars/[car-id]/…; null = not acquired. */
  path: string | null;
  alt: string;
  /** Finish shown in the photo, so a differing selected paint can be labelled. */
  pictured: { colourId: ColourId | null; note: string | null } | null;
  rights: AssetRights;
}

export interface Model3dAsset {
  path: string | null;
  format: 'glb' | 'gltf' | null;
  sizeBytes: number | null;
  /** Exact vehicle the model represents; must match the record version. */
  represents: string | null;
  /** Mesh/material names needed by the viewer (paint, lights). Filled in B01/B07. */
  materialSlots: { paint: string[]; headlights: string[] } | null;
  rights: AssetRights;
}

/* ---------- Colours, wheel, interior ---------- */

export interface PaintMaterial {
  /** Linear-space or sRGB hex agreed in B11. */
  baseColour: string;
  metalness: number;
  roughness: number;
  clearcoat: number | null;
}

export interface ColourOption {
  id: ColourId;
  /** Official paint name. */
  name: string;
  /** CSS preview for the swatch. */
  swatch: string;
  material: PaintMaterial | null;
  source: SourceRef | null;
}

/* ---------- Camera and hotspots ---------- */

export type Vec3 = readonly [number, number, number];

export interface CameraAnchor {
  id: string;
  position: Vec3;
  target: Vec3;
  fov: number | null;
}

export type HotspotView = 'exterior-3d' | 'exterior-photo' | 'interior-driver' | 'interior-front' | 'interior-rear' | 'interior-boot';

export interface Hotspot {
  id: string;
  view: HotspotView;
  title: string;
  /** Exactly two short, accurate points. */
  points: readonly [string, string];
  /** 3D: camera anchor id. Photo: normalised x/y position (0–1). */
  anchor: { kind: 'camera'; anchorId: string } | { kind: 'photo'; x: number; y: number };
  detailPhoto: AssetRef | null;
  source: SourceRef | null;
}

/* ---------- Official destination ---------- */

export interface OfficialDestination {
  url: string | null;
  /** 'model' = exact model/version page; 'range' = clearly labelled manufacturer range fallback. */
  kind: 'model' | 'range';
  /** Shown when kind is 'range'. */
  fallbackExplanation: string | null;
  checkedOn: IsoDate | null;
  status: VerificationStatus;
}

/* ---------- Car record ---------- */

export interface CarRecord {
  id: CarId;
  brandId: BrandId;
  /** e.g. "4 Series Coupé" — manufacturer styling preserved. */
  modelName: string;
  /** Generation code / model year, e.g. "G22, 2025 model year". */
  generation: string | null;
  modelYear: number | null;
  /** Exact version/trim, e.g. "M440i xDrive". One exact version used throughout. */
  version: string | null;
  bodyStyle: BodyStyle;
  powertrain: Powertrain;
  /** Brief factual character/use description. */
  description: string;
  price: PriceInfo;
  specs: SpecEntry[];
  headline: HeadlineSpecs;
  colours: ColourOption[];
  defaultColourId: ColourId | null;
  wheel: { name: string | null; source: SourceRef | null };
  interior: { name: string | null; source: SourceRef | null };
  assets: {
    cardPhoto: AssetRef | null;
    studioThumbnail: AssetRef | null;
    exterior: AssetRef[];
    interior: Partial<Record<'driver' | 'front' | 'rear' | 'boot', AssetRef>>;
    details: AssetRef[];
    model3d: Model3dAsset | null;
  };
  cameraAnchors: CameraAnchor[];
  hotspots: Hotspot[];
  officialDestination: OfficialDestination;
  /** Overall record status — only 'verified' records may be published. */
  status: VerificationStatus;
}
