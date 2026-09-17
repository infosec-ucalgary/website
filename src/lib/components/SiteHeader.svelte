<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	// TODO: replace with the club's real URLs.
	const DISCORD_URL = 'https://discord.gg/TODO';
	const LINKEDIN_URL = 'https://linkedin.com/company/TODO';
	const INSTAGRAM_URL = 'https://instagram.com/TODO';
	const EMAIL_ADDRESS = 'contact@TODO.example';

	const current = $derived(page.url.pathname);
</script>

<div class="ticker-bar">
	<!-- decorative + auto-rotating: hidden from assistive tech, not essential content -->
	<div class="ticker-rotator" aria-hidden="true">
		<div class="ticker-track">
			<!-- TODO: pull real events/announcements; static placeholders for now -->
			<span class="ticker-item">📅 Next event: YOU For Sale</span>
			<span class="ticker-item">💬 Join the conversation on Discord</span>
			<span class="ticker-item">🔗 Follow us on LinkedIn</span>
			<span class="ticker-item">PLACEHOLDER STATUS BAR THINGY</span>
			<span class="ticker-item">📅 Next event: YOU For Sale</span>
		</div>
	</div>

	<!-- fixed, independent of the rotator above -->
	<div class="ticker-socials">
		<a href={DISCORD_URL} target="_blank" rel="noreferrer noopener" aria-label="Discord">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 5h16v10H9l-4 4V5z" />
				<circle cx="9" cy="10" r="0.9" fill="currentColor" stroke="none" />
				<circle cx="13" cy="10" r="0.9" fill="currentColor" stroke="none" />
				<circle cx="17" cy="10" r="0.9" fill="currentColor" stroke="none" />
			</svg>
		</a>
		<a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
				<rect x="3" y="3" width="18" height="18" rx="3" />
				<line stroke-linecap="round" x1="7.5" y1="10" x2="7.5" y2="16" />
				<circle cx="7.5" cy="7" r="0.7" fill="currentColor" stroke="none" />
				<path stroke-linecap="round" d="M11 16v-4a2 2 0 0 1 4 0v4" />
				<line stroke-linecap="round" x1="11" y1="10" x2="11" y2="16" />
			</svg>
		</a>
		<a href={INSTAGRAM_URL} target="_blank" rel="noreferrer noopener" aria-label="Instagram">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
				<rect x="3" y="3" width="18" height="18" rx="5" />
				<circle cx="12" cy="12" r="4" />
				<circle cx="17" cy="7" r="0.7" fill="currentColor" stroke="none" />
			</svg>
		</a>
		<a href="mailto:{EMAIL_ADDRESS}" aria-label="Email">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
				<rect x="3" y="5" width="18" height="14" rx="2" />
				<path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9 6 9-6" />
			</svg>
		</a>
	</div>
</div>

<header class="site-header">
	<a href={resolve('/')} class="brand">
		<img src="/images/logo.svg" alt="" width="40" height="40" />
		<span>UCalgary Cyber Security Club</span>
	</a>

	<nav aria-label="Primary">
		<a href={resolve('/')} aria-current={current === '/' ? 'page' : undefined}>Home</a>
		<a href={resolve('/events')} aria-current={current === '/events' ? 'page' : undefined}>Events</a>
		<a href={resolve('/about')} aria-current={current === '/about' ? 'page' : undefined}>Meet the Team</a>
	</nav>
</header>

<style>
	.ticker-bar {
		--item-h: 1.6rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.4rem 1.25rem;
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
	}

	.ticker-rotator {
		height: var(--item-h);
		overflow: hidden;
		font-size: 0.8rem;
		color: var(--color-muted);
	}

	.ticker-track {
		display: flex;
		flex-direction: column-reverse;
		animation: ticker-rotate 16s ease-in-out infinite;
	}

	.ticker-item {
		height: var(--item-h);
		display: flex;
		align-items: center;
		white-space: nowrap;
	}

	/* stack (post column-reverse, top to bottom): item1-dup, item4, item3, item2, item1.
	   translateY rises toward 0 over time, so each new line drops in from the top
	   and the previous one exits the bottom — a "wheel rotating down". */
	@keyframes ticker-rotate {
		0%,
		18% {
			transform: translateY(calc(-4 * var(--item-h)));
		}
		23%,
		41% {
			transform: translateY(calc(-3 * var(--item-h)));
		}
		46%,
		64% {
			transform: translateY(calc(-2 * var(--item-h)));
		}
		69%,
		87% {
			transform: translateY(calc(-1 * var(--item-h)));
		}
		92%,
		100% {
			transform: translateY(0);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.ticker-track {
			animation: none;
		}
	}

	.ticker-socials {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		flex-shrink: 0;
	}

	.ticker-socials a {
		display: flex;
		color: var(--color-muted);
		transition: color 0.15s ease;
	}

	.ticker-socials a:hover {
		color: var(--color-foreground);
	}

	.ticker-socials svg {
		width: 18px;
		height: 18px;
	}

	.site-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--color-foreground);
		text-decoration: none;
		font-weight: 700;
		font-size: 1.05rem;
	}

	nav {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	nav a {
		padding: 0.5rem 1rem;
		border-radius: 0.6rem;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		color: var(--color-foreground);
		text-decoration: none;
		font-size: 0.85rem;
		font-weight: 500;
		transition:
			background-color 0.15s ease,
			border-color 0.15s ease;
	}

	nav a:hover {
		background: var(--color-surface-hover);
	}

	nav a[aria-current='page'] {
		background: var(--color-brand-700);
		border-color: var(--color-brand-500);
		color: white;
	}
</style>
