# Paul Randal — Portfolio

Professional portfolio site built with Angular 22 (standalone components, zoneless, OnPush by default).

## Run locally

```bash
npm install
npm start
```

Open http://localhost:4200

## Build

```bash
npm run build
```

Output is in `dist/portfolio/browser`.

## Deploy

Static hosting works well.

### Netlify
- Build command: `npm run build`
- Publish directory: `dist/portfolio/browser`
- Or drag-and-drop the build folder.

### Vercel
- Framework preset: Angular
- Or set build command `npm run build` and output `dist/portfolio/browser`.

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
# point to dist/portfolio/browser
npm run build
firebase deploy
```

### GitHub Pages
Use a GitHub Action or the `angular-cli-ghpages` package after building.

## Notes
- Dark mode toggle persists in localStorage and respects system preference.
- Replace placeholder project entries, contact details, resume PDF, and OG image.
- No external UI libraries. SCSS only.
- WCAG AA contrast targeted; focus rings visible; skip link included.
