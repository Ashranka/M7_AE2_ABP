import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  },
  base:'https://ashranka.github.io/M7_AE2_ABP/'
})
