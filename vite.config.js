import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/her-surprise/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
