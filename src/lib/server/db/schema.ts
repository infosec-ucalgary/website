// Drizzle schema for Cloudflare D1. Run `npm run db:push` after editing.
//
// Planned tables:
// - users              Discord-authenticated club members (discord id, username, avatar)
// - sessions           login sessions, short TTL, snapshots the rank at login time
// - role_ranks         Discord role id -> org rank (1 President .. 5 Jr Exec)
// - executives         org chart / exec roster (name, title, rank, team, parent_id, photo, term)
// - blog_posts         writeups/blog (markdown content, optional per-post custom_css/theme)
// - subscribers        mailing list
// - events              upcoming/past events (title, date, location, description, img)

import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const events = sqliteTable('events', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	date: integer('date', { mode: 'timestamp' }).notNull(),
	location: text('location'),
	description: text('description'),
	img: text('img')
});

export const execs = sqliteTable('execs', {
	name: text('name').primaryKey(),
	team: text('team').notNull(),
	img: text('img'),
	description: text('description').notNull(),
	quote: text('quote').notNull()
});

export const subscribers = sqliteTable('subscribers', {
	email: text('name').primaryKey(),
	name: text('name'),
});