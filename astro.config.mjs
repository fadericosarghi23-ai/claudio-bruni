import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio dello studio indicato sulla scheda Quotalo.
// [[DA VALIDARE: confermare che il nuovo sito andrà su questo dominio]]
// Da qui escono canonical, Open Graph, sitemap e robots.txt.
export const SITE_URL = 'https://www.studiogeometrabruni.it';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
