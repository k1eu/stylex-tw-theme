import path from 'node:path'
import react from '@vitejs/plugin-react'
import { unplugin as stylex } from '@stylexjs/unplugin'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    stylex.vite({
      useCSSLayers: true,
      unstable_moduleResolution: {
        type: 'commonJS',
        rootDir: path.resolve(import.meta.dirname, '../..'),
      },
    }),
    react(),
  ],
})
