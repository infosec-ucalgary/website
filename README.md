# UCalgary Cyber Security Club Website

SvelteKit app deployed to Cloudflare Pages, with Cloudflare D1 (via Drizzle) for data.

This project uses `devenv`. See [https://devenv.sh/getting-started/](https://devenv.sh/getting-started/)

## Development

DEVELOPMENT SHOULD **ONLY** BE DONE IN THIS MAIN BRANCH. DO NOT WRITE YOUR CODE OR PULL REQUESTS IN PROD.

Please read up on how SvelteKit handles routing. The repo has been setup for all the pages, they just need to be implemented.
You should not be editing anything besides the code in `src` and static images in `static` unless you know what you are doing.

I (Hadi) would really recommend to check out [devenv](https://devenv.sh). It is a really cool project, which allows you to
spin up development environments without having to install a bunch of bullshit to your computer (of course, it will still
be installed, it's just that it won't clutter up your OS).

Once you have devenv setup, simply run `devenv shell` in this folder to get a terminal with all the commands. If you are
using Visual Studio Code, get the `direnv` and `devenv` extensions from the marketplace so that the project can detect
the devenv environment and use the programs provided by it instead of complaining.

## Commands

Run inside the devenv shell (`devenv shell`, or automatically via direnv):

- `dev` — start the dev server
- `build` — production build
- `preview` — build and preview locally with `wrangler pages dev`
- `deploy` — build and deploy to Cloudflare Pages
- `db-migrate` / `db-migrate-remote` — apply D1 migrations locally / remotely

See `npm run` for the full script list (lint, format, db:push, db:studio, etc).
