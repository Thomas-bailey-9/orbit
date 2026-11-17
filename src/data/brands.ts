import type { BrandRecord } from './types';

/**
 * Brand records. Add a brand by adding a record here — no screen duplication.
 * Logos are null until accurate, permitted badge artwork is recorded in docs/ASSET_REGISTER.md.
 */
export const brands: readonly BrandRecord[] = [
  { id: 'bmw', name: 'BMW', order: 1, logo: null },
  { id: 'porsche', name: 'Porsche', order: 2, logo: null },
  { id: 'mercedes-benz', name: 'Mercedes-Benz', order: 3, logo: null },
];

export const getBrand = (id: string) => brands.find((b) => b.id === id) ?? null;
