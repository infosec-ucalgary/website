// Drizzle schema for Cloudflare D1. Run `npm run db:push` after editing.
//
// Planned tables:
// - users              Discord-authenticated club members (discord id, username, avatar)
// - sessions           login sessions, short TTL, snapshots the rank at login time
// - role_ranks         Discord role id -> org rank (1 President .. 5 Jr Exec)
// - executives         org chart / exec roster (name, title, rank, team, parent_id, photo, term)
// - blog_posts         writeups/blog (markdown content, optional per-post custom_css/theme)
// - subscribers        mailing list
// - intake_submissions junior exec intake form responses
// - events              upcoming/past events (title, date, location); not modeled yet —
//                        the home page's "Next Event" tile is a static placeholder until this exists

export {};
