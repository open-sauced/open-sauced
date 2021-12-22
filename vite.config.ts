// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteVisualizer from "rollup-plugin-visualizer";


export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const isProd = mode === "production";
  const isReport = mode === "report";

  const build = {
    outDir: "build",
    assetsDir: "static",
    sourcemap: !isDev,
    manifest: false,
    rollupOptions: {}
  };

  const plugins = [
    eslintPlugin(),
    react({
      // Exclude storybook stories
      exclude: /\.stories\.(t|j)sx?$/,
      // Only .jsx files
      include: "**/*.jsx"
    })
  ];

  // broken until we figure out how to automate it w/wo workbox
  if (isProd) {
    // build.manifest = true;

    plugins.push(
      ViteLegacy({
        targets: [
          'defaults',
          'not IE 11'
        ]
      })
    )
  }

  if (isReport) {
    plugins.push(
      ViteVisualizer({
        filename: "./build/bundle.html",
        open: true,
        gzipSize: true
      })
    );
  }

  return {
    base: "/",
    mode,
    plugins,
    publicDir: "public",
    server: {
      port: 3000,
      open: true,
    },
    build,
    preview: {
      port: 3000,
    },
  };
});
