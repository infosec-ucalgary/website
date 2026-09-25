<!-- This is the landing page -->

<script lang="ts">
	import HomeGrid from "$lib/components/HomeGrid.svelte";
	import HomeGridBox from "$lib/components/HomeGridBox.svelte";
</script>

<h1 class="sr-only">UCalgary Cyber Security Club</h1>

<div class="home">
	<HomeGrid>
		<HomeGridBox size="hero">
			<h2>Upcoming Event</h2>
		</HomeGridBox>
		<HomeGridBox size="small">
			<h2>Mailing List</h2>
			<a>Join now!</a>
		</HomeGridBox>
		<HomeGridBox size="tall">
			<h2>Latest Post</h2>
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
</style>
