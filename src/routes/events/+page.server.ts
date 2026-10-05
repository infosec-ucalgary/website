import { asc } from 'drizzle-orm';
import { getDb } from '$lib/server/db';
import { events } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ platform }) => {
	// no database connected -> empty calendar instead of a crash
	if (!platform?.env?.DB) return { events: [] };

	const db = getDb(platform.env.DB);

	// every event, oldest first
	const allEvents = await db.select().from(events).orderBy(asc(events.date));

	return { events: allEvents };
};