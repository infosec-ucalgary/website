// Drizzle schema for Cloudflare D1. Run `npm run db:push` after editing.
//
// Planned tables:
// - users              Discord-authenticated club members (discord id, username, avatar)
// - sessions           login sessions, short TTL, snapshots the rank at login time
// - role_ranks         Discord role id -> org rank (1 President .. 5 Jr Exec)
// - executives         org chart / exec roster (name, title, rank, team, parent_id, photo, term)
// - posts              writeups/blog (markdown content, optional per-post custom_css/theme)
// - subscribers        mailing list
// - events              upcoming/past events (title, date, location, description, img)

import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id').primaryKey(),
	username: text('username').notNull(),
	avatar: text('avatar')
});

export const events = sqliteTable('events', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	title: text('title').notNull(),
	date: integer('date', { mode: 'timestamp' }).notNull(),
	location: text('location').notNull(),
	description: text('description').notNull(),
	img: text('img').notNull()
});

export const execs = sqliteTable('execs', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	userId: text('user_id')
		.unique()
		.references(() => users.id, { onDelete: 'set null' }),
	name: text('name').notNull(),
	team: text('team').notNull(),
	img: text('img'),
	description: text('description').notNull(),
	quote: text('quote').notNull()
});

export const subscribers = sqliteTable('subscribers', {
	email: text('email').primaryKey(),
	name: text('name').notNull(),
});

export const posts = sqliteTable('posts', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	style: text('style'),
	type: text('type').notNull(),
	content: text('contents').notNull()
});