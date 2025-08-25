
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/kijo/', // 👈 this is needed for GitHub Pages
  plugins: [react()],
})