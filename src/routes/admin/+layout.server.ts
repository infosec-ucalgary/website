import type { LayoutServerLoad } from './$types';

// access is checked in src/hooks.server.ts before this runs
export const load: LayoutServerLoad = async ({ locals }) => {
	return { user: locals.user };
};