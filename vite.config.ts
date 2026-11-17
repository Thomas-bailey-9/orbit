import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// GitHub Pages serves the site from /orbit/. Dev and preview use the same base,
// so local paths match the hosted site exactly.
export default defineConfig({
  base: '/orbit/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // B01 isolated technical test (separate page; B00 root unchanged).
        assetTest: resolve(__dirname, 'asset-test/index.html'),
      },
    },
  },
});
