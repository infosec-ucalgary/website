import type { RequestHandler } from './$types';

// TODO: redirect to Discord's OAuth authorize URL (scope=identify, with a state param for CSRF).
export const GET: RequestHandler = async () => {
	throw new Error('not implemented');
};
