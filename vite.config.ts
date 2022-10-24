import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      base: "/",
      registerType: "prompt",
      injectRegister: "auto",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**\/*.{js,css,html,svg,png,jpeg}"]
      },

      devOptions: {
        // enabled: true,
      },

      manifest: {
        name: "Easy Calculator",
        short_name: "EasyCalc",
        theme_color: "#3b82f6",
        background_color: "#faf7f5",
        display: "standalone",
        orientation: "portrait",
        lang: "pt-br",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/images/icons/sample-icon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }
        ],
      }
    })
  ]
})
