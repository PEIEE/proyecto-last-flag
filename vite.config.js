import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        arsenal: resolve(__dirname, 'arsenal.html'),
        banshee: resolve(__dirname, 'banshee.html'),
        bountyHunter: resolve(__dirname, 'bounty-hunter.html'),
        knives: resolve(__dirname, 'knives.html'),
        lumberjack: resolve(__dirname, 'lumberjack.html'),
        roadie: resolve(__dirname, 'roadie.html'),
        scout: resolve(__dirname, 'scout.html'),
        skyfire: resolve(__dirname, 'skyfire.html'),
        tango: resolve(__dirname, 'tango.html'),
      },
    },
  },
})
