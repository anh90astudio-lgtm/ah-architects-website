# A+H Architects v0.14 — reference-aligned editorial layout

Next.js source for A+H Architects. Based on the three-panel visual reference supplied by the studio.

## Deploy updated version using GitHub and Vercel

1. Unzip the archive and open `ah-architects-v014`.
2. Upload the **contents** of that folder to the existing GitHub repository root (do not upload the folder itself). Overwrite changed files and commit. Using Git CLI is easiest for replacing multiple files.
3. Vercel should automatically deploy the new commit. Check deployment status and production URL.

## Local development

```bash
npm install
npm run dev
npm run build
```

## Important

- The Unsplash photographs are placeholders and are **not** verified A+H project photography. Replace them in `lib/projects.ts` with real project images.
- Project descriptions, credits, dates and collaborators require editorial review before public launch.
- Hero and project layout are responsive interpretations of the supplied reference; precise appearance varies with screen dimensions.
- Site is not a CMS. Content is currently edited in `lib/projects.ts`.
