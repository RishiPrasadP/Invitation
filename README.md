# Nadhisha & Kathiravan Wedding Invitation

A premium luxury wedding microsite built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Lucide Icons**.

This site delivers a cinematic Tamil wedding invitation experience with:
- immersive entry and opening animations
- a floating music controller with persistent state
- countdown to the wedding day
- event details, venue navigation, invitation card, and blessings
- accessibility-first semantic markup and keyboard support
- performance-friendly code splitting, lazy loading, and local music asset
- SEO metadata, structured data, sitemap, and robots.txt

## Project Structure

- `app/` — page and route files
- `components/` — reusable UI and animation components
- `hooks/` — custom client hooks
- `lib/` — content constants and utilities
- `types/` — shared TypeScript interfaces
- `public/` — static assets and local audio files
- `tests/` — unit and end-to-end test suites

## Setup

### Prerequisites

- Node.js >= 20.9.0
- npm

### Install dependencies

```bash
npm install --legacy-peer-deps
```

> The `--legacy-peer-deps` flag is used to resolve the React 19 testing library peer dependency tree in this workspace.

## Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Production Build

```bash
npm run build
```

This verifies the Next.js production build.

## Testing

### Unit tests

```bash
npm run test:unit
```

### End-to-end tests

```bash
npm run test:e2e
```

### Playwright setup

If you have not installed Playwright browsers yet:

```bash
npx playwright install
```

## Deployment

This site is ready to deploy to **Vercel**.

Recommended Vercel workflow:
1. Create a new Vercel project from this repository.
2. Set framework to **Next.js** and use the default build command.
3. Ensure the Node version is set to **20.9.0** or later.
4. Deploy.

## Performance Strategy

- local audio asset under `public/audio`
- CSS animation defaults disabled for `prefers-reduced-motion`
- lazy-loaded iframe for venue map
- semantic page sections for strong Lighthouse scoring
- minimal client-side JavaScript where possible

## Troubleshooting

### Build fails due Node version

Use Node.js 20.9.0 or newer.

### Jest environment errors

Install the missing environment package with:

```bash
npm install --legacy-peer-deps
```

### Playwright browser installation

```bash
npx playwright install
```
# Invitation
