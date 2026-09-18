import type { LayoutServerLoad } from './$types';

// TODO: gate access to VPs or higher (locals.user.rank <= 3: President, VP, VP Team Leads).
// Redirect to /login/discord if not logged in, 403 if logged in but rank > 3.
export const load: LayoutServerLoad = async ({ locals }) => {
	return { user: locals.user };
};
