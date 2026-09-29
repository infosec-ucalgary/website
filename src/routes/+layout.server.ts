import { gte, asc } from 'drizzle-orm';
import { getDb } from '$lib/server/db';
import { events } from '$lib/server/db/schema';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ platform }) => {
	// no database connected (e.g. D1 not set up yet) -> just show no event
	if (!platform?.env?.DB) return { nextEvent: null };

	const db = getDb(platform.env.DB);

	// the soonest event that hasn't happened yet
	const [nextEvent] = await db
		.select({ title: events.title, date: events.date })
		.from(events)
		.where(gte(events.date, new Date()))
		.orderBy(asc(events.date))
		.limit(1);

	return { nextEvent: nextEvent ?? null };
};