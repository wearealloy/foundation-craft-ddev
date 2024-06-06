import { defineConfig } from 'vite';
import ViteRestart from 'vite-plugin-restart';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.VITE_DEV_PORT;
const PRIMARY_SITE_URL = process.env.DDEV_PRIMARY_URL;
const ORIGIN = PRIMARY_SITE_URL + PORT;

/** @type {import('vite').UserConfig} */
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  publicDir: path.resolve(__dirname, 'src/public'),
  build: {
    manifest: true,
    outDir: path.resolve(__dirname, 'web/dist/'),
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'src/js/app.js'),
      },
    },
    modulePreload: true,
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: PORT,
    origin: ORIGIN,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/css'),
    },
  },
  plugins: [
    ViteRestart({
      reload: [path.resolve(__dirname, 'templates/**/*.twig')],
    }),
  ],
}));
