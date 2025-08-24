import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],

  optimizeDeps: {
    include: ['@emailjs/browser'],
  exclude: ["lucide-react/dist/esm/icons/chrome.js"]
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
