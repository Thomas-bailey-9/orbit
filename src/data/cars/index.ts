import type { CarRecord } from '../types';

/**
 * Production catalogue. Intentionally EMPTY in B00: no car has passed the asset/data
 * gate (see docs/ASSET_REGISTER.md). Add one file per car under src/data/cars/[brand]/
 * and register it here once verified. Never import design-check fixtures into this file.
 */
export const cars: readonly CarRecord[] = [];
