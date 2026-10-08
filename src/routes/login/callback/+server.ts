import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	// TODO: check state, exchange code with Authentik, read groups -> rank, create session cookie

	// send them back where they were headed, or to the exec dashboard
	const to = cookies.get('login_redirect');
	cookies.delete('login_redirect', { path: '/' });
	// only local paths, otherwise /login?redirectTo=https://evil.com becomes an open redirect
	redirect(303, to?.startsWith('/') && !to.startsWith('//') ? to : '/admin');
};