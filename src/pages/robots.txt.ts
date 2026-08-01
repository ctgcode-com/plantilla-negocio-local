import type { APIRoute } from 'astro';

/**
 * `robots.txt` generado, no estático: el archivo que había apuntaba a
 * `https://example.com/sitemap-index.xml` — un dominio que no es de nadie.
 *
 * La línea `Sitemap:` sale del `site` de `astro.config.mjs`, así que cambiar
 * de dominio basta con cambiarlo ahí. En modo demo no sale ninguna: la demo
 * pide `noindex` y no genera sitemap, anunciarlo sería mentir.
 */
const isDemo = import.meta.env.PUBLIC_DEMO === 'true';

export const GET: APIRoute = ({ site }) => {
  const lines = ['User-agent: *', 'Allow: /'];

  if (!isDemo && site) {
    const base = import.meta.env.BASE_URL || '/';
    lines.push('', `Sitemap: ${new URL(`${base}sitemap-index.xml`.replace(/\/+/g, '/'), site).href}`);
  }

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
