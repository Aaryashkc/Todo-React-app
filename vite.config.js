import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT || 5173, // Use Render's port or fallback to 5173 for local dev
    host: '0.0.0.0', // Ensure Render can access the app
  }
})
