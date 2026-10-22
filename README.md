# A+H Architects v0.15 — Reference-locked mobile layout

Next.js website. Three supplied mobile visual references are the layout specification:

1. Home: nearly edge-to-edge vertical photo, small centered serif wordmark, navigation underneath, minimal bottom slider controls, 3-second automatic rotation, no project captions.
2. Projects: one landscape image per row (approx. 2.38:1), narrow page gutters, small serif title and uppercase location/year immediately below, tight vertical rhythm.
3. Detail: wide image hero (approx. 1.83:1), centered wordmark plus right hamburger, compact title and metadata, editorial lead/body on left, credits sidebar on right even on phones, quote with adjacent image.

## Deploy

Upload **contents** of this directory into the root of the existing GitHub repository, replacing corresponding files. Keep `package.json` at repository root. Vercel deploys the main branch automatically.

## Local test

```sh
npm install
npm run build
npm run dev
```

Images and some project facts are placeholders. Replace with studio-approved photography and verified metadata before publishing as an official portfolio.
