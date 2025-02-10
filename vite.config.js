import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://10.10.20.28:5017', // Backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes "/api" prefix
        secure: false, // If the backend uses HTTPS with an invalid certificate
      },
    },
  },
});
