import { defineConfig } from 'vite'
import ViteReact from '@vitejs/plugin-react'
import ViteEslint from '@nabla/vite-plugin-eslint'
import { createHtmlPlugin } from 'vite-plugin-html'
import ViteInspect from 'vite-plugin-inspect'
import ViteLegacy from '@vitejs/plugin-legacy'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import ViteReplace from '@rollup/plugin-replace'
import ViteTimeReporter from 'vite-plugin-time-reporter'
import ViteVisualizer from 'rollup-plugin-visualizer'
import { sync } from 'execa'
import type { ConfigEnv, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}: ConfigEnv): UserConfig => {
  // figure out commands
  const isBuild = command === 'build';

  // figure out modes
  const isDev = mode === "development";
  const isProd = mode === "production";
  const isReport = mode === "report";

  // figure out custom build options
  const isTest = process.env.NODE_ENV === 'test';
  const isLegacy = process.env.VITE_LEGACY || false;
  const isGitpodBuild = process.env.GITPOD_WORKSPACE_URL || false;
  const isReplitBuild = process.env.REPL_SLUG || false;
  const isStackblitzBuild = process.env.STACKBLITZ_ENV || false;
  const isCodeSandboxBuild = process.env.CODESANDBOX_SSE || false;
  const isGlitchBuild = process.env.PROJECT_REMIX_CHAIN || false;
  const isCloudIdeBuild = isGitpodBuild || isReplitBuild || isStackblitzBuild || isCodeSandboxBuild || isGlitchBuild;

  const config:UserConfig = {
    base: "/",
    mode,
    plugins: [],
    publicDir: "public",
    clearScreen: true,
    server: {
      host: true,
      port: 3000,
      strictPort: true,
      open: !isCloudIdeBuild,
    },
    build: {
      outDir: "build",
      assetsDir: "static",
      sourcemap: !isDev,
      rollupOptions: {},
      manifest: false,
    },
    preview: {
      port: 3000,
    }
  };

  config.plugins.push(
    ViteTimeReporter(),
    ViteEslint(),
    ViteInspect(),
    ViteReact({
      fastRefresh: !isTest,
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
    createHtmlPlugin({
      minify: isProd && isBuild,
      inject: {
        data: {
          title: `Open Sauced v${process.env.npm_package_version}`,
          date: new Date().toISOString(),
        },
      },
    })
  );

  isBuild && isLegacy && config.plugins.push(
    ViteLegacy({
      targets: [
        'defaults',
        'not IE 11'
      ]
    })
  );

  isReport && config.plugins.push(
    ViteVisualizer({
      filename: "./build/bundle.html",
      open: true,
      gzipSize: true
    })
  );

  const pwaOptions: Partial<VitePWAOptions> = {
    disable: !isProd,
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
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'claims-sw.ts',
    injectManifest: {
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
    }
  };

  const replaceOptions = {
    preventAssignment: true,
    __RELOAD_SW__: true,
  };

  config.plugins.push(
    VitePWA(pwaOptions),
    ViteReplace(replaceOptions),
  );

  // cloud container shared and specific build options
  isCloudIdeBuild && (config.server.hmr = {
    port: 443,
  });

  if (isGitpodBuild) {
    config.base = process.env.GITPOD_WORKSPACE_URL;
  }

  if (isReplitBuild) {
    config.base = `https://${process.env.REPL_SLUG}-${process.env.REPL_OWNER}.repl.co`;
  }

  if (isStackblitzBuild) {
    const { stdout } = sync("hostname");
    config.base = `https://${stdout}--${config.server.port}.local.webcontainer.io/`;
  }

  if (isGlitchBuild) {
    config.base = `https://${process.env.PROJECT_DOMAIN}.glitch.me/`;
  }

  if (isCodeSandboxBuild) {
    const [type, sandbox, id] = process.env.HOSTNAME.split('-');
    config.base = `https://${id}.${type}.code${sandbox}.io/`;
  }

  return config;
});
