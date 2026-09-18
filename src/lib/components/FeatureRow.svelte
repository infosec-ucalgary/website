<script lang="ts">
	let {
		kicker,
		title,
		abstract,
		tags = []
	}: {
		kicker: string;
		title: string;
		abstract: string;
		tags?: string[];
	} = $props();
</script>

<article class="feature">
	<div class="kicker" aria-hidden="true">{kicker}</div>

	<div class="visual">
		<span class="visual-title">{title}</span>
	</div>

	<div class="side">
		<p class="abstract">{abstract}</p>
		<div class="tags">
			{#each tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</article>

<style>
	.feature {
		display: grid;
		grid-template-columns: auto 1fr 20rem;
		gap: 1rem;
	}

	.kicker {
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--color-muted);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		border-radius: 0.75rem;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
	}

	.visual {
		position: relative;
		min-height: 18rem;
		display: flex;
		align-items: flex-end;
		padding: 1rem;
		border-radius: 0.75rem;
		border: 1px solid var(--color-border);
		background: var(--color-brand-950);
	}

	.visual-title {
		padding: 0.6rem 1rem;
		border-radius: 0.6rem;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		color: var(--color-foreground);
		font-weight: 600;
	}

	.side {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.abstract {
		flex: 1;
		margin: 0;
		padding: 1rem;
		border-radius: 0.75rem;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
		color: var(--color-muted);
		font-size: 0.9rem;
		line-height: 1.5;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		padding: 0.75rem;
		border-radius: 0.75rem;
		border: 1px solid var(--color-border);
		background: var(--color-surface);
	}

	.tag {
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		background: var(--color-brand-700);
		color: white;
		font-size: 0.75rem;
		font-weight: 500;
	}

	@media (max-width: 860px) {
		.feature {
			grid-template-columns: 1fr;
		}
		.kicker {
			writing-mode: horizontal-tb;
			transform: none;
		}
	}
</style>
