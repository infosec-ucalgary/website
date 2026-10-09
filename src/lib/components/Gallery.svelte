<script lang="ts">
	// TODO: swap src to https://cdn.ucalgary.club/... once the CDN is set up
	type Photo = { src: string; alt: string; caption?: string };

	const photos: Photo[] = [
		{
			src: 'https://placehold.co/600x400/2b1f41/c4b5fd?text=Workshop',
			alt: 'Placeholder workshop photo',
			caption: 'Workshop'
		},
		{
			src: 'https://placehold.co/600x400/2b1f41/c4b5fd?text=magpieCTF',
			alt: 'Placeholder magpieCTF photo',
			caption: 'magpieCTF'
		},
		{
			src: 'https://placehold.co/600x400/2b1f41/c4b5fd?text=Speaker+Series',
			alt: 'Placeholder speaker series photo',
			caption: 'Speaker Series'
		},
		{
			src: 'https://placehold.co/600x400/2b1f41/c4b5fd?text=Social',
			alt: 'Placeholder social event photo',
			caption: 'Social'
		}
	];
</script>

<div class="gallery">
	{#each photos as photo (photo.src)}
		<figure>
			<img src={photo.src} alt={photo.alt} loading="lazy" />
			{#if photo.caption}
				<figcaption>{photo.caption}</figcaption>
			{/if}
		</figure>
	{/each}
</div>

<style>
	.gallery {
		display: flex;
		gap: 1rem;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		padding-bottom: 0.5rem;
		scrollbar-width: thin;
		scrollbar-color: var(--color-brand-700) transparent;
	}

	figure {
		position: relative;
		flex: 0 0 min(16rem, 80%);
		margin: 0;
		scroll-snap-align: start;
	}

	img {
		display: block;
		width: 100%;
		aspect-ratio: 3 / 2;
		object-fit: cover;
		border-radius: var(--border-radius);
	}

	figcaption {
		position: absolute;
		left: 0.5rem;
		bottom: 0.5rem;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		background-color: rgb(43 31 65 / 0.85);
		color: var(--color-muted);
		font-size: 0.875rem;
	}
</style>
