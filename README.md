# anothermoth.com

Studio site for Anothermoth, built with [Astro](https://astro.build) as a fully static site.

```sh
npm install
npm run dev       # local dev server
npm run build     # static output in dist/
npm run shots     # refresh project screenshots in src/assets/work (needs Chrome)
node scripts/og.mjs   # re-render public/og.png
npm run deploy    # build and deploy to Cloudflare Pages (project "anothermoth")
```

Project, prototype and role content lives in `src/data/work.ts`.
