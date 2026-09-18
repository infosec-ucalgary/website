# UCalgary Cyber Security Club Website

SvelteKit app deployed to Cloudflare Pages, with Cloudflare D1 (via Drizzle) for data.

This project uses `devenv`. See [https://devenv.sh/getting-started/](https://devenv.sh/getting-started/)

## Commands

Run inside the devenv shell (`devenv shell`, or automatically via direnv):

- `dev` — start the dev server
- `build` — production build
- `preview` — build and preview locally with `wrangler pages dev`
- `deploy` — build and deploy to Cloudflare Pages
- `db-migrate` / `db-migrate-remote` — apply D1 migrations locally / remotely

See `npm run` for the full script list (lint, format, db:push, db:studio, etc).
