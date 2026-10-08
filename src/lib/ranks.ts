// Org ranks, lowest number = highest authority. Shared by the DB schema, Authentik group
// resolution and the about page.
export const RANKS = {
	PRESIDENT: 1,
	SR_VP: 2,
	VP: 3,
	SR_EXEC: 4,
	JR_EXEC: 5
} as const;

export const RANK_TITLES: Record<number, string> = {
	[RANKS.PRESIDENT]: 'President',
	[RANKS.SR_VP]: 'Sr. Vice President',
	[RANKS.VP]: 'Vice President',
	[RANKS.SR_EXEC]: 'Sr. Exec',
	[RANKS.JR_EXEC]: 'Jr. Exec'
};
