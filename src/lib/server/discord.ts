// Discord OAuth + role lookup helpers.
//
// Plan:
// - exchangeCodeForToken(code): POST to discord.com/api/oauth2/token, scope "identify"
// - getDiscordUser(accessToken): GET /users/@me -> { id, username, avatar }
// - getGuildMemberRoles(discordUserId): GET /guilds/{GUILD_ID}/members/{id} using the
//   bot token (env.DISCORD_BOT_TOKEN), not the user's OAuth token
// - resolveRank(roleIds): cross-reference role_ranks table (src/lib/server/db/schema.ts)
//   to find the member's highest-authority rank (1 = President ... 5 = Jr Exec)
//
// Required env vars (see .env.example): DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET,
// DISCORD_BOT_TOKEN, DISCORD_GUILD_ID, DISCORD_REDIRECT_URI
