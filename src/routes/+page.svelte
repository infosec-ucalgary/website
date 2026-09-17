<script lang="ts">
	import FeatureRow from '$lib/components/FeatureRow.svelte';
</script>

<h1 class="sr-only">UCalgary Cyber Security Club</h1>

<!-- TODO: generic placeholders; no events/news data source wired up yet -->
<div class="home">
	<FeatureRow
		kicker="PLACEHOLDER"
		title="PLACEHOLDER"
		abstract="Lorum ipsum dolor sit amet."
		tags={['PLACEHOLDER']}
	/>

	<hr />

	<FeatureRow
		kicker="PLACEHOLDER"
		title="PLACEHOLDER"
		abstract="Lorum ipsum dolor sit amet."
		tags={['PLACEHOLDER']}
	/>

	<FeatureRow
		kicker="PLACEHOLDER"
		title="PLACEHOLDER"
		abstract="Lorum ipsum dolor sit amet."
		tags={['PLACEHOLDER']}
	/>

	<FeatureRow
		kicker="PLACEHOLDER"
		title="PLACEHOLDER"
		abstract="Lorum ipsum dolor sit amet."
		tags={['PLACEHOLDER']}
	/>

	<FeatureRow
		kicker="PLACEHOLDER"
		title="PLACEHOLDER"
		abstract="Lorum ipsum dolor sit amet."
		tags={['PLACEHOLDER']}
	/>

	<FeatureRow
		kicker="PLACEHOLDER"
		title="PLACEHOLDER"
		abstract="Lorum ipsum dolor sit amet."
		tags={['PLACEHOLDER']}
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
