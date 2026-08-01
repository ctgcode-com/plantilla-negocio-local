import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const basePath = process.env.BASE_PATH || '/';

/**
 * Modo demo (la copia publicada bajo ctgcode.com). Sin sitemap: la demo pide
 * `noindex`, y listarla en un sitemap propio sería pedir lo contrario en el
 * mismo despliegue. En un sitio de cliente el sitemap sí se genera.
 */
const isDemo = process.env.PUBLIC_DEMO === 'true';

export default defineConfig({
  site: 'https://ctgcode.com',
  base: basePath,
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: isDemo ? [] : [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
