// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from "@nabla/vite-plugin-eslint";

export default defineConfig({
  plugins: [
    eslintPlugin(),
    react({
      // Exclude storybook stories
      exclude: /\.stories\.(t|j)sx?$/,
      // Only .jsx files
      include: '**/*.jsx',
    })
  ],
  // mode: "production",
  build: {
    outDir: "build"
  }
})
