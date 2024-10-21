import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/



// vite.config.js


export default defineConfig({
  plugins: [react()],
  base: '3D-Portfolio',
  build: {
    // To adjust the chunk size warning limit
    chunkSizeWarningLimit: 5000, // Increase this value based on your chunk size limit

    // To configure manual chunks with Rollup
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Move all node_modules into a separate 'vendor' chunk
          }
        }
      }
    }
  }
});
