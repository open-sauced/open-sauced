// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteVisualizer from "rollup-plugin-visualizer";
import ViteHtml from 'vite-plugin-html'

export default defineConfig(({command, mode, ...rest }) => {
  // figure out commands
  const isBuild = command === 'build';

  // figure out modes
  const isDev = mode === "development";
  const isProd = mode === "production";
  const isReport = mode === "report";

  // figure out custom build options
  const isLegacy = process.env.VITE_LEGACY || false;

  const build = {
    outDir: "build",
    assetsDir: "static",
    sourcemap: !isDev,
    rollupOptions: {},
    manifest: false,
  };

  const plugins = [
    eslintPlugin(),
    react({
      // Exclude storybook stories
      exclude: /\.stories\.(t|j)sx?$/,
      // Only .jsx files
      include: "**/*.jsx"
    }),
    ViteHtml({
      minify: isBuild,
      inject: {
        data: {
          title: `Open Sauced v${process.env.npm_package_version}`,
        },
      },
    })
  ];

  // broken until we figure out how to automate it w/wo workbox
  // isProd && (build.manifest = true);

  isBuild && isLegacy && plugins.push(
    ViteLegacy({
      targets: [
        'defaults',
        'not IE 11'
      ]
    })
  )

  isReport && plugins.push(
    ViteVisualizer({
      filename: "./build/bundle.html",
      open: true,
      gzipSize: true
    })
  );

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
