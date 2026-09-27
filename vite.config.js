import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Hackathon-Digitech/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Hackathon App',
        short_name: 'HackApp',

        description: 'PWA preparada para hackathon',

        theme_color: '#0B1020',
        background_color: '#0B1020',

        display: 'standalone',

        start_url: '/Hackathon-Digitech/',

        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})