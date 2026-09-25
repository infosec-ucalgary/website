<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import {DISCORD_URL, LINKEDIN_URL, INSTAGRAM_URL, EMAIL_ADDRESS } from '$lib/links';
	import logo from "$lib/assets/logo.svg";

	import TickerBar, { type TickerMessage } from './TickerBar.svelte';

	// The ticker: edit this list to change what scrolls by. Each entry is
	// { text, href? } — with an href it becomes a link, without one it's plain
	// text. Order is the rotation order; the bar hides itself if the list is empty.
	// TODO: pull real events/announcements; static placeholders for now.
	const TICKER_MESSAGES: TickerMessage[] = [
		{ text: '📅 Next event: YOU For Sale', href: resolve('/events') },
		{ text: '💬 Join the conversation on Discord', href: DISCORD_URL },
		{ text: '🔗 Follow us on LinkedIn', href: LINKEDIN_URL },
		{ text: '✍️ Read the latest writeups', href: resolve('/blog') }
	];

	const current = $derived(page.url.pathname);

	// at the top of the page, the logo/nav rest aligned to the content column;
	// once you scroll past the threshold they expand out to the viewport edges.
	let atTop = $state(true);

	$effect(() => {
		const THRESHOLD = 24;
		let ticking = false;
		const update = () => {
			atTop = window.scrollY < THRESHOLD;
			ticking = false;
		};
		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(update);
			}
		};
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<div class="sticky-header">
	<div class="ticker-bar">
		<div class="ticker-inner">
			<TickerBar messages={TICKER_MESSAGES} />

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
	</div>

	<header class="site-header" class:at-top={atTop}>
		<div class="header-inner">
			<a href={resolve('/')} class="brand">
				<img src={logo} alt="" width="40" height="40" />
				<span>UCalgary Cyber Security Club</span>
			</a>

			<nav aria-label="Primary">
				<a href={resolve('/')} aria-current={current === '/' ? 'page' : undefined}>Home</a>
				<a href={resolve('/events')} aria-current={current === '/events' ? 'page' : undefined}
					>Events</a
				>
				<a href={resolve('/about')} aria-current={current === '/about' ? 'page' : undefined}
					>About</a
				>
				<a href={resolve('/blog')} aria-current={current === '/blog' ? 'page' : undefined}>Blog</a>
			</nav>
		</div>
	</header>
</div>

<style>
	.sticky-header {
		position: sticky;
		top: 0;
		z-index: 50;
		/* the whole header chrome (ticker, brand, nav) stays on the display face,
		   while page content below inherits the body font */
		font-family: var(--font-display);
	}

	/* logo/nav row: rests aligned to the same centered column as page content
	   (see --content-max-width in routes/layout.css) so it matches the body
	   content's edges; expands out to the true viewport edges once scrolled
	   (see .site-header:not(.at-top) below). */
	.header-inner {
		max-width: var(--content-max-width);
		margin: 0 auto;
		width: 100%;
		padding-inline: 1.25rem;
		box-sizing: border-box;
		transition: max-width 0.4s ease;
	}

	.site-header:not(.at-top) .header-inner {
		max-width: 100%;
	}

	.ticker-bar {
		background: var(--color-surface);
		border-bottom: 1px solid var(--color-border);
	}

	/* always full-bleed edge-to-edge, unaffected by scroll — never moves */
	.ticker-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.4rem 1.25rem;
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
		background: var(--color-background);
		border-bottom: 1px solid var(--color-border);
	}

	.site-header .header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 1rem;
		padding-block: 1rem;
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
