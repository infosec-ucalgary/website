<!-- This is the landing page -->

<script lang="ts">
	import HomeGrid from "$lib/components/HomeGrid.svelte";
	import HomeGridBox from "$lib/components/HomeGridBox.svelte";
	import { resolve } from "$app/paths";

	let { data } = $props();

</script>

<h1 class="sr-only">UCalgary Cyber Security Club</h1>

<div class="home">
	<HomeGrid>
		<HomeGridBox size="hero">
			<div class="event-header">
				<h2>Upcoming Event</h2>
				{#if data.nextEvent}
					<span class="event-pill">
						{data.nextEvent.date.toLocaleDateString()}{data.nextEvent.location ? ` · ${data.nextEvent.location}` : ''}
					</span>
				{/if}
			</div>
			<hr>
			{#if data.nextEvent}
				<h3>{data.nextEvent.title}</h3>
				{#if data.nextEvent.img}
					<div class="event-media">
						<img src={data.nextEvent.img} alt={data.nextEvent.title} />
						{#if data.nextEvent.description}
							<p class="event-description">{data.nextEvent.description}</p>
						{/if}
					</div>
				{:else if data.nextEvent.description}
					<p>{data.nextEvent.description}</p>
				{/if}
			{:else}
				<p>No upcoming events.</p>
			{/if}
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
			<h2>About Us</h2>
			<p>
				Founded in 2019 CYBERSEC is a not-for-profit, student-run
				organization at the University of Calgary focused on providing
				a platform and hub for students and aspiring cybersecurity
				professionals to connect and collaborate. Our organization
				strives to offer the best free lectures, workshops, speaker
				series, fireside chats, challenge events and networking events
				available in the ever-expanding realm of cybersecurity.
				CYBERSEC is also home to the renowned magpieCTF, an annual
				CTF event for all skill-levels with thousands of dollars in prizes!
			</p>
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

	.event-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.event-pill {
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		border: 1px solid var(--color-border);
		background-color: var(--color-surface-darker);
		color: var(--color-muted);
		font-size: 0.875rem;
		white-space: nowrap;
	}

	.event-media {
		position: relative;
		flex: 1;
		min-height: 0;
	}

	.event-media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--border-radius);
	}

	.event-description {
		position: absolute;
		right: 1rem;
		bottom: 1rem;
		max-width: min(24rem, calc(100% - 2rem));
		background-color: rgb(43 31 65 / 0.85);
		backdrop-filter: blur(4px);
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
