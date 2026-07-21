# chedy-sleimi.netlify.app

Personal portfolio of Chedy Sleimi — QA engineer who builds the tools that test.

Live: https://chedy-sleimi.netlify.app (English) · https://chedy-sleimi.netlify.app/fr/ (français)

## Stack

- [Astro 7](https://astro.build) — static output, strict TypeScript, zero client JS
- Hand-written CSS (OKLCH tokens, light/dark via `prefers-color-scheme`)
- Fonts: Spectral (display) + Public Sans (body), self-hosted via Fontsource
- Netlify — continuous deploy from `main`

## Develop

```sh
npm install
npm run dev        # local dev server
npm run build      # static build to dist/
npx astro check    # strict type/diagnostic check
```

## Structure

- `src/pages/` — English pages; `src/pages/fr/` — French pages (full locale, same facts)
- `src/layouts/Base.astro` — head, hreflang, header/footer shell
- `src/styles/global.css` — the entire design system
- `docs/adr/` — decisions and why they were made
- `public/cv-chedy-sleimi.pdf` — generic CV (generated from the canonical CV source)

Content rule: every fact on the site traces to the CV source of truth. Nothing is
invented; both locales carry identical facts.
