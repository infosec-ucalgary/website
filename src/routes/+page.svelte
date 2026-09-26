<!-- This is the landing page -->

<script lang="ts">
	import HomeGrid from "$lib/components/HomeGrid.svelte";
	import HomeGridBox from "$lib/components/HomeGridBox.svelte";
	import { resolve } from "$app/paths";

</script>

<h1 class="sr-only">UCalgary Cyber Security Club</h1>

<div class="home">
	<HomeGrid>
		<HomeGridBox size="hero">
			<h2>Upcoming Event</h2>
			<hr>
			<p>Some event description here</p>
		</HomeGridBox>
		<HomeGridBox size="small">
			<h2>Mailing List</h2>
			<hr>
			<a class="button-link" href={resolve('/mailing')}>Join now!</a>
		</HomeGridBox>
		<HomeGridBox size="medium">
			<h2>Placeholder</h2>
			<hr>
		</HomeGridBox>
		<HomeGridBox size="tall">
			<h2>Latest Post</h2>
			<hr>
		</HomeGridBox>
		<HomeGridBox size="square">
			<h2>Placeholder</h2>
			<hr>
		</HomeGridBox>
		<HomeGridBox size="wide">
			<h2>Placeholder</h2>
			<hr>
		</HomeGridBox>
		<HomeGridBox size="small">
			<h2>Placeholder</h2>
			<hr>
		</HomeGridBox>
	</HomeGrid>
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
		padding: 2rem var(--page-gutter);
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	p {
		background-color: var(--color-surface-darker);
		padding: 1rem 1rem;
		border-radius: var(--border-radius);
	}

	.button-link {
		padding: 1rem;
		border-radius: var(--border-radius);
		background-color: var(--color-brand-700);
		text-align: center;
	}

	.button-link:hover {
		text-decoration: underline;
		background-color: var(--color-brand-800);
	}
</style>
