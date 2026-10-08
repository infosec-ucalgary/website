<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	const current = $derived(page.url.pathname);

	// the dashboard only matches exactly; every other section also matches its subpages
	// (e.g. /admin/posts/new keeps "Writeups" highlighted)
	const isCurrent = (href: string, exact = false) =>
		exact ? current === href : current === href || current.startsWith(`${href}/`);
</script>

<!-- separates the admin nav from the main nav row, same width as the pill track -->
<hr />

<nav aria-label="Admin">
	<div class="pills">
		<a href={resolve('/admin')} aria-current={isCurrent('/admin', true) ? 'page' : undefined}
			>Dashboard</a
		>
		<a
			href={resolve('/admin/executives')}
			aria-current={isCurrent('/admin/executives') ? 'page' : undefined}>Executives</a
		>
		<a href={resolve('/admin/posts')} aria-current={isCurrent('/admin/posts') ? 'page' : undefined}
			>Posts</a
		>
		<a
			href={resolve('/admin/mailing-list')}
			aria-current={isCurrent('/admin/mailing-list') ? 'page' : undefined}>Mailing List</a
		>
	</div>
</nav>

<style>
	hr {
		margin-bottom: 0.75rem;
	}

	/* horizontal gutter comes from the header's column wrapper */
	nav {
		padding-bottom: 0.75rem;
	}

	/* one full-width rounded track holding all the pills, scrolls sideways on narrow screens */
	.pills {
		display: flex;
		gap: 0.25rem;
		padding: 0.25rem;
		width: 100%;
		box-sizing: border-box;
		overflow-x: auto;
		border: 1px solid var(--color-border);
		border-radius: 999px;
		background: var(--color-surface);
	}

	/* pills share the full width equally */
	a {
		flex: 1;
		text-align: center;
		padding: 0.35rem 0.9rem;
		border-radius: 999px;
		color: var(--color-muted);
		text-decoration: none;
		font-size: 0.8rem;
		font-weight: 500;
		white-space: nowrap;
		transition:
			background-color 0.15s ease,
			color 0.15s ease;
	}

	a:hover {
		background: var(--color-surface-hover);
		color: var(--color-foreground);
	}

	a[aria-current='page'] {
		background: var(--color-brand-700);
		color: white;
	}
</style>
