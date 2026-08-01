# Plantilla — Negocio local

Landing de una sola página para comercios con sede física: restaurantes,
salones, talleres y tiendas. Incluye hero, historia, menú o catálogo, galería,
horarios y ubicación con mapa. Construida con Astro y Tailwind CSS, optimizada
para SEO y rendimiento.

Forma parte del catálogo de plantillas de **[CTG Code](https://ctgcode.com)**.
La página que la explica a fondo —qué trae, qué incluye el encargo, precio y
plazo— vive en [ctgcode.com/plantillas/negocio-local/](https://ctgcode.com/plantillas/negocio-local/).

## Stack

- [Astro](https://astro.build) 5 (salida estática)
- [Tailwind CSS](https://tailwindcss.com) 4
- Iconos [Lucide](https://lucide.dev) renderizados como SVG en tiempo de build (cero JS)

## Desarrollo

```bash
bun install
bun run dev       # http://localhost:4321
bun run build     # genera dist/
bun run preview   # sirve el build
```

## Variables de entorno

| Variable | Valor | Para qué |
|---|---|---|
| `BASE_PATH` | ruta del subdirectorio | Sirve la plantilla colgando de una ruta (`/plantilla-negocio-local`) en vez de la raíz. |
| `PUBLIC_LOCALE` | `es` \| `en` | Idioma con el que se construye. Por defecto `es`. |
| `PUBLIC_DEMO` | `true` | **Modo demo.** Solo para la copia de muestra publicada bajo ctgcode.com. |

`PUBLIC_DEMO=true` cambia tres cosas, y las tres por el mismo motivo: la demo
simula un negocio que no existe y no puede pasar por uno real ante un buscador.

- Emite `<meta name="robots" content="noindex, follow">`.
- **No** emite el JSON-LD del negocio (`Restaurant`, con dirección y teléfono).
- **No** genera sitemap.

Un sitio de cliente se construye SIN esa variable: ahí el negocio sí existe y
todo eso debe salir.

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
