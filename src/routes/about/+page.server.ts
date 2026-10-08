import { asc } from 'drizzle-orm';
import { getDb } from '$lib/server/db';
import { execs } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	// no database connected -> empty roster instead of a crash
	if (!platform?.env?.DB) return { execs: [] };

	const db = getDb(platform.env.DB);

	// highest rank first, so each team lists VPs, then Sr. Execs, then Jr. Execs
	const roster = await db.select().from(execs).orderBy(asc(execs.rank), asc(execs.name));

	return { execs: roster };
};
