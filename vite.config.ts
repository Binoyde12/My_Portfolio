import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/My_Portfolio",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host:true,
    port:5173,
    watch:{
      usePolling : true,
    },
  
  },
});
