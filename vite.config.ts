import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

// vite.config.ts ou vite.config.js
export default defineConfig({
  base: '/organizador-de-agenda/', // 👈 necessário para funcionar no GitHub Pages
  ...
})
