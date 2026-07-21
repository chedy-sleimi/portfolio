// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://chedy-sleimi.netlify.app',
  // compressHTML collapses the whitespace between inline elements ("built<strong>Neotest",
  // an unbreakable footer link row that overflows mobile). Pages are tiny; gzip covers it.
  compressHTML: false,
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    // English at /, French at /fr/ (prefixDefaultLocale: false is the default)
  },
});
