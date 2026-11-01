# Husniddin — Portfolio

Personal 3D portfolio of Husniddin, economist & founder from Tashkent, Uzbekistan.

Built on the open portfolio template by [Mohit Virli](https://github.com/mohitvirli/mohitvirli.github.io) (design, 3D scenes and animations are his work).

## Editing content

All personal content lives in a few files:

| What | File |
| --- | --- |
| Projects & ventures | `app/constants/projects.ts` |
| Work & education timeline | `app/constants/work.ts` |
| Footer links | `app/constants/footer.ts` |
| Hero greeting | `app/components/hero/index.tsx` |
| Words on the window | `app/components/hero/TextWindow.tsx` |
| Page title / SEO | `app/layout.tsx` |

Note: the title font (Soria) has no hyphen glyph, so avoid `-` in project and timeline titles.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
```

Optional environment variables:

- `NEXT_PUBLIC_SITE_URL` — canonical URL, used for sitemap and social previews
- `NEXT_PUBLIC_GA_ID` — Google Analytics ID

## Deploy

The site is a static export (`output: 'export'`), deployed on Vercel from this repository: every push to `main` goes live at https://husniddin-three.vercel.app

## Tech stack

Next.js, React, React Three Fiber, Drei, GSAP, Zustand, Tailwind.

## 3D model credits

- *Residential Window* by AleixoAlonso (Sketchfab), CC-BY-4.0
- *Wanderer above the sea of fog* by betocarrillo (Sketchfab), CC-BY-SA-4.0
- *Dali, The Persistence of Memory* by arloopa (Sketchfab), CC-BY-4.0
