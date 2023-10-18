import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: "/src" }, 
      { find: "@assets", replacement: "/src/assets" }, 
      { find: "@components", replacement: "/src/components" }, 
    ],
  },
  plugins: [react()],
})
