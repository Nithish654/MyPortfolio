import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL FIX: This must match your GitHub Repository name exactly
  base: '/MyPortfolio/', 
  server: {
    port: 5173,
    open: true
  }
})