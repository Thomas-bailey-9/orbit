import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /orbit/. Dev and preview use the same base,
// so local paths match the hosted site exactly.
export default defineConfig({
  base: '/orbit/',
  plugins: [react()],
});
