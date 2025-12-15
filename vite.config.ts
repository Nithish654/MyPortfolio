import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'YOUR_REPO_NAME' with your actual GitHub repository name (e.g., '/my-portfolio/')
  // If you are deploying to https://username.github.io (root), change this to '/'
  base: 'https://github.com/Nithish654/MyPortfolio.git', 
  server: {
    port: 5173,
    open: true
  }
})