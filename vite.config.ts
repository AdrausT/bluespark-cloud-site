import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Only split framer-motion statically — it IS a static dep of all sections.
          // Three.js/R3F is a pure dynamic import (React.lazy) so let Vite handle it
          // naturally; adding it here incorrectly injects a modulepreload hint for
          // every visitor including mobile users who never render the 3D canvas.
          motion: ['framer-motion'],
        },
      },
    },
  },
})
