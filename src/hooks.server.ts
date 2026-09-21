// This is where we will have to load cookies from the browser

import type { Handle } from '@sveltejs/kit';

// TODO: read the session cookie, look up the session in D1 (src/lib/server/session.ts),
// and attach the resolved user + org rank to `event.locals.user` so route guards
// (e.g. src/routes/admin/+layout.server.ts) can check it.
export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = null;
	return resolve(event);
};
