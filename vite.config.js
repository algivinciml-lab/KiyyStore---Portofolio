import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' membuat hasil build bisa di-host di mana saja (Vercel, Netlify, GitHub Pages, dll.)
export default defineConfig({
  base: './',
  plugins: [react()],
})
