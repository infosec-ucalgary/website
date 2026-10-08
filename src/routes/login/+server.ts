import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, cookies }) => {
	const redirectTo = url.searchParams.get('redirectTo');
	if (redirectTo) {
		cookies.set('login_redirect', redirectTo, {
			path: '/',
			httpOnly: true,
			sameSite: 'lax',
			maxAge: 60 * 10
		});
	}

	// TODO: build the Authentik authorize URL (state + PKCE) and redirect(302, it)
	throw new Error('not implemented');
};
