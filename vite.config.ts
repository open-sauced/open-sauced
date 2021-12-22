// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteEslint from '@nabla/vite-plugin-eslint'
import ViteHtml from 'vite-plugin-html'
import ViteLegacy from '@vitejs/plugin-legacy'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import ViteReplace from '@rollup/plugin-replace'
import ViteVisualizer from 'rollup-plugin-visualizer'

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
    ViteEslint(),
    react({
      // Exclude storybook stories
      exclude: /\.stories\.(t|j)sx?$/,
      // Only .jsx files
      include: "**/*.jsx",
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false
            }
          ]
        ]
      }
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

  const pwaOptions: Partial<VitePWAOptions> = {
    includeAssets: [
      'favicon.svg',
      'favicon.ico',
      'robots.txt',
      'apple-touch-icon.png'
    ],
    manifest: {
      name: 'Open Sauced',
      short_name: 'Open Sauced',
      description: 'Open Sauced',
      theme_color: '#FFFFFF',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    registerType: 'autoUpdate',
    strategies: 'generateSW',
    srcDir: 'src'
  };
  const replaceOptions = {
    preventAssignment: true,
    __DATE__: new Date().toISOString(),
  }

  const reload = process.env.RELOAD_SW === 'true'

  if (reload) {
    // @ts-ignore
    replaceOptions.__RELOAD_SW__ = 'true'
  }

  plugins.push(
    VitePWA(pwaOptions),
    ViteReplace(replaceOptions),
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
