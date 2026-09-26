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
						<path d="M18.8943 4.34399C17.5183 3.71467 16.057 3.256 14.5317 3C14.3396 3.33067 14.1263 3.77866 13.977 4.13067C12.3546 3.89599 10.7439 3.89599 9.14391 4.13067C8.99457 3.77866 8.77056 3.33067 8.58922 3C7.05325 3.256 5.59191 3.71467 4.22552 4.34399C1.46286 8.41865 0.716188 12.3973 1.08952 16.3226C2.92418 17.6559 4.69486 18.4666 6.4346 19C6.86126 18.424 7.24527 17.8053 7.57594 17.1546C6.9466 16.92 6.34927 16.632 5.77327 16.2906C5.9226 16.184 6.07194 16.0667 6.21061 15.9493C9.68793 17.5387 13.4543 17.5387 16.889 15.9493C17.0383 16.0667 17.177 16.184 17.3263 16.2906C16.7503 16.632 16.153 16.92 15.5236 17.1546C15.8543 17.8053 16.2383 18.424 16.665 19C18.4036 18.4666 20.185 17.6559 22.01 16.3226C22.4687 11.7787 21.2836 7.83202 18.8943 4.34399ZM8.05593 13.9013C7.01058 13.9013 6.15725 12.952 6.15725 11.7893C6.15725 10.6267 6.98925 9.67731 8.05593 9.67731C9.11191 9.67731 9.97588 10.6267 9.95454 11.7893C9.95454 12.952 9.11191 13.9013 8.05593 13.9013ZM15.065 13.9013C14.0196 13.9013 13.1652 12.952 13.1652 11.7893C13.1652 10.6267 13.9983 9.67731 15.065 9.67731C16.121 9.67731 16.985 10.6267 16.9636 11.7893C16.9636 12.952 16.1317 13.9013 15.065 13.9013Z" stroke="currentColor" stroke-linejoin="round"/>
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
				<enhanced:img src={logo} alt="CyberSec Logo" width="40" height="40" />
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
		padding-inline: var(--page-gutter);
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
