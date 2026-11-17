/** B01 technical-test values only. Never import into production data. */
export const testAsset = {
  path: 'test-assets/t-g20-001/g20-test.glb',
  listingTitle: '2023 bmw 3 series',
  listingIdentity: 'Highpoly 3d model base on the 2023 BMW 320i xdrive base model',
  sourceUrl: 'https://sketchfab.com/3d-models/2023-bmw-3-series-82534fdddd7e46e4bdb202d6c1d3c0e7',
  creator: 'solid3DDD',
  creatorUrl: 'https://sketchfab.com/solid3ddd',
  changes:
    'interior, tyres, wheels and minor parts simplified (body and lights unchanged); materials deduplicated; geometry quantised and meshopt-compressed.',
} as const;

/** Temporary test colours — not official paint names. */
export const testPaints = [
  { id: 'test-blue', name: 'Test blue', hex: '#1c3a86', preview: 'radial-gradient(circle at 32% 28%, #5f86d6 0%, #1f3f8f 45%, #0c1b45 100%)' },
  { id: 'test-silver', name: 'Test silver', hex: '#b9bdc2', preview: 'radial-gradient(circle at 32% 28%, #f4f5f7 0%, #b7bcc2 45%, #5d636a 100%)' },
  { id: 'test-black', name: 'Test black', hex: '#0e0f11', preview: 'radial-gradient(circle at 32% 28%, #4a4d52 0%, #16181b 45%, #050506 100%)' },
] as const;
