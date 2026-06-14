# Plantilla — Negocio local

Landing de una sola página para comercios con sede física: restaurantes,
salones, talleres y tiendas. Incluye hero, historia, menú o catálogo, galería,
horarios y ubicación con mapa. Construida con Astro y Tailwind CSS, optimizada
para SEO y rendimiento.

Forma parte del catálogo de plantillas de **[Ferser](https://ferser.co)**.

## Stack

- [Astro](https://astro.build) 5 (salida estática)
- [Tailwind CSS](https://tailwindcss.com) 4
- Iconos [Lucide](https://lucide.dev) renderizados como SVG en tiempo de build (cero JS)

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve el build
```

## Personalización

- **`src/templates/local/data.ts`** — marca, menú, galería, horarios, ubicación
  y datos de contacto. Editas ese archivo y el sitio se actualiza.
- Las imágenes de demostración usan [Unsplash](https://unsplash.com); reemplázalas
  por fotos reales del negocio (las URLs están en `data.ts`).
- **`astro.config.mjs`** — ajusta `site` con el dominio definitivo (afecta el
  canonical, el sitemap y las etiquetas Open Graph).
- **`public/favicon.svg`** y **`public/og.png`** — reemplázalos por los del cliente.

## Despliegue

Genera un sitio estático en `dist/`, desplegable en cualquier hosting estático
(Netlify, Vercel, Cloudflare Pages, un VPS, etc.).
