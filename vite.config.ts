import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this project at /novum/. Override with VITE_BASE=/ for a root domain.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/novum/',
  plugins: [react()],
})
