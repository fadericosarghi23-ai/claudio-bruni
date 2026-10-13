import type { APIRoute } from 'astro';

// robots.txt generato dal dominio canonico (SITE_URL in astro.config.mjs):
// cambiando dominio non resta un indirizzo vecchio scritto a mano.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
