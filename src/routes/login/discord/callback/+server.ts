import type { RequestHandler } from './$types';

// TODO: verify state, exchange code for token (src/lib/server/discord.ts), look up guild
// member roles with the bot token, resolve rank, create a session (src/lib/server/session.ts),
// set the session cookie, redirect to /admin.
export const GET: RequestHandler = async () => {
	throw new Error('not implemented');
};
