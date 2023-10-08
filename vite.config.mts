import { vanillaExtractPlugin as vanillaExtract } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';
import $env from './vite.config.env';

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

  define: { $env },
});
