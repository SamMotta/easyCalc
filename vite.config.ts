import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectRegister: "auto",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**\/*.{js,css,html,svg}"]
      },

      devOptions: {
        // enabled: true,
      },
    })
  ]
})
