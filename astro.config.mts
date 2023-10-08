import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import compressor from 'astro-compressor';
import critters from 'astro-critters';
import purgecss from 'astro-purgecss';

/** @see https://astro.build/config */
export default defineConfig({
  integrations: [
    /**
     * @npm https://www.npmjs.com/package/@astrojs/solid-js
     * @docs https://docs.astro.build/ja/guides/integrations-guide/solid-js
     */
    solidJs(),

    /**
     * @npm https://www.npmjs.com/package/@astrojs/sitemap
     * @docs https://docs.astro.build/ja/guides/integrations-guide/sitemap
     */
    sitemap(),

    /**
     * @npm https://www.npmjs.com/package/astro-purgecss
     * @docs https://github.com/codiume/orbit/tree/main/packages/astro-purgecss#readme
     */
    purgecss(),

    /**
     * @npm https://www.npmjs.com/package/astro-critters
     * @docs https://github.com/astro-community/astro-critters#readme
     * @deps https://github.com/astro-community/astro-critters/blob/main/package.json
     */
    critters({
      Critters: {
        pruneSource: true,
        inlineFonts: false,
      },
      Logger: 2,
    }),

    /**
     * @npm https://www.npmjs.com/package/astro-compress
     * @docs https://github.com/astro-community/astro-compress#readme
     * @deps https://github.com/astro-community/astro-compress/blob/main/package.json
     */
    compress({
      HTML: {
        removeAttributeQuotes: false,
      },
      CSS: true,
      JavaScript: {
        compress: {
          passes: 2,
        },
      },
      Image: false,
      SVG: {
        multipass: true,
      },
      Logger: 1,
    }),

    /**
     * @npm https://www.npmjs.com/package/astro-compressor
     * @docs https://github.com/sondr3/astro-compressor#readme
     */
    compressor({ gzip: false }),
  ],

  site: $env.URL,

  output: 'static',
});
