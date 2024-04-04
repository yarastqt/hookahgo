import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import basicSsl from '@vitejs/plugin-basic-ssl'
import react from '@vitejs/plugin-react'

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]_[local]__[hash:base64:5]',
    },
  },

  plugins: [
    react(),
    tsconfigPaths(),
    basicSsl({
      name: 'hookahgo',
      domains: ['*.hookahgo.com'],
    }),
  ],
})
