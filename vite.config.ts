import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      '@routes': path.resolve(__dirname, "./src/routes"),
    }
  },
  plugins: [react()],
})
