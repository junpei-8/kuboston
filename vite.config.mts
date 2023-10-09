import { fileURLToPath, URL } from 'node:url';
import { vanillaExtractPlugin as vanillaExtract } from '@vanilla-extract/vite-plugin';
import { defineConfig, loadEnv } from 'vite';
import { getEnv } from './vite.config.env';

/** @see https://ja.vitejs.dev/config */
export default defineConfig({
  plugins: [
    /**
     * @npm https://www.npmjs.com/package/@vanilla-extract/vite-plugin
     * @docs https://vanilla-extract.style
     */
    vanillaExtract(),
  ],

  build: {
    assetsInlineLimit: 0,
  },

  define: {
    $env: getEnv(
      loadEnv('production', fileURLToPath(new URL('.', import.meta.url)), ''),
    ),
  },
});
