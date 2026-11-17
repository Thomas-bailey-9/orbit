/**
 * ILLUSTRATIVE design-check fixtures — NOT vehicle data.
 * Never import these into src/data/cars or any production screen.
 */
import type { SwatchOption } from '../../components/ui/controls';

export const illustrativeSwatches: SwatchOption[] = [
  { id: 'sample-blue', name: 'Blue', preview: 'radial-gradient(circle at 32% 28%, #5f86d6 0%, #1f3f8f 45%, #0c1b45 100%)' },
  { id: 'sample-silver', name: 'Silver', preview: 'radial-gradient(circle at 32% 28%, #f4f5f7 0%, #b7bcc2 45%, #5d636a 100%)' },
  { id: 'sample-black', name: 'Black', preview: 'radial-gradient(circle at 32% 28%, #4a4d52 0%, #16181b 45%, #050506 100%)' },
];

export const sampleCard = {
  eyebrow: 'Layout sample',
  name: 'Example model',
  description: 'Details to be confirmed.',
  powertrainLabel: 'Powertrain to be confirmed',
  priceLabel: 'Approx. £—',
} as const;

/** Fictional numbers for the animation sample only. */
export const animationSamples = {
  number: { value: 4.6, decimals: 1, unit: 's', label: 'Fictional figure' },
  price: { value: 48250, label: 'Fictional price' },
  text: { value: 'RWD', label: 'Typed value' },
} as const;

export const bodyStyleSampleOptions = [
  { value: 'all', label: 'All styles' },
  { value: 'coupe', label: 'Coupé' },
  { value: 'saloon', label: 'Saloon' },
  { value: 'suv', label: 'SUV' },
] as const;
