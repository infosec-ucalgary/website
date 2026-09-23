<!-- This is the landing page -->

<script lang="ts">
	import FeatureRow from '$lib/components/FeatureRow.svelte';
</script>

{#snippet flagIcon()}
	<svg viewBox="0 0 16 16" fill="currentColor" role="presentation">
		<path
			d="M3 1a.75.75 0 0 1 .75.75v.36l8.64 1.9a.5.5 0 0 1 .1.94L4.5 8.6v6.65a.75.75 0 0 1-1.5 0V1.75A.75.75 0 0 1 3 1Z"
		/>
	</svg>
{/snippet}

<h1 class="sr-only">UCalgary Cyber Security Club</h1>

<div class="home">
	<FeatureRow
		kicker="test kicker"
		title="test title"
		abstract="test abstract"
		tags={[
			'test tag 1',
			{ label: 'test tag 2', color: 'accent' },
			{ label: 'ctf', color: 'success', icon: flagIcon },
			{ label: 'members only', color: 'muted', icon: '🔒' }
		]}
	/>
</div>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.home {
		max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 2rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	hr {
		border: none;
		border-top: 1px solid var(--color-border);
		margin: 0;
	}
</style>
