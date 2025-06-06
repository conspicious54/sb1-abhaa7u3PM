import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/',
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: true,
    historyApiFallback: true
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: true,
    open: true,
    historyApiFallback: true
  }
});