// Session helpers (D1-backed, short TTL so role/rank changes in Discord take effect quickly).
//
// Plan:
// - createSession(db, user, rank): insert into `sessions`, return session id
// - getSession(db, sessionId): look up session + join user, checking expiry
// - destroySession(db, sessionId): delete on logout
//
// Called from src/hooks.server.ts (read cookie -> getSession -> event.locals.user)
// and src/routes/login/discord/callback/+server.ts (on successful login).
