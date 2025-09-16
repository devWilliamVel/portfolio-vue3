import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    // Optimizaciones para el build de producción
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendors para mejor caching
          vue: ['vue', 'vue-router', 'pinia'],
          utils: ['@/utils', '@/composables'],
        },
      },
    },
  },
  server: {
    open: true,
    cors: true,
    port: 3000,
  },
  preview: {
    port: 4173,
    cors: true,
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia'],
  },
})
