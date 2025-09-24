import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // String shorthand for simple proxy rules
      '/api': {
        // Make sure the target matches the port your backend server is running on
        target: 'http://localhost:5000', 
        changeOrigin: true,
      },
    },
  },
});