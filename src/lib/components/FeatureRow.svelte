<script lang="ts" module>
	import type { Snippet } from 'svelte';

	/** Palette a tag can be painted in. Each maps to theme tokens in src/lib/theme.css. */
	export type TagColor = 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'muted';

	export type FeatureTag = {
		/** Text shown in the pill. */
		label: string;
		/** Defaults to "brand". */
		color?: TagColor;
		/**
		 * Optional mark shown before the label. Pass a string for a glyph or emoji,
		 * or a snippet for inline SVG — a snippet's svg inherits `currentColor` and
		 * is sized to the label, so it takes the tag's colour automatically.
		 */
		icon?: Snippet | string;
	};
</script>

<script lang="ts">
	type Props = {
		kicker: string;
		title: string;
		abstract: string;
		/** Plain strings get the default brand colour and no icon. */
		tags?: (string | FeatureTag)[];
	};

	let { kicker, title, abstract, tags = [] }: Props = $props();

	const normalized = $derived(
		tags.map((tag) => (typeof tag === 'string' ? { label: tag } : tag)) satisfies FeatureTag[]
	);

	const isSnippet = (icon: Snippet | string): icon is Snippet => typeof icon === 'function';
</script>

<article class="feature">
	<div class="kicker" aria-hidden="true">{kicker}</div>

	<div class="visual">
		<span class="visual-title">{title}</span>
	</div>

	<div class="side">
		<p class="abstract">{abstract}</p>
		<div class="tags">
			{#each normalized as tag (tag.label)}
				<span class="tag" data-color={tag.color ?? 'brand'}>
					{#if tag.icon}
						<span class="tag-icon" aria-hidden="true">
							{#if isSnippet(tag.icon)}
								{@render tag.icon()}
							{:else}
								{tag.icon}
							{/if}
						</span>
					{/if}
					{tag.label}
				</span>
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
		display: inline-flex;
		align-items: center;
		gap: 0.35em;
		padding: 0.25rem 0.6rem;
		border-radius: 999px;
		border: 1px solid transparent;
		font-size: 0.75rem;
		font-weight: 500;
		/* Each data-color below only swaps these two; the pill itself stays put. */
		background: var(--tag-bg);
		color: var(--tag-fg);
	}

	/* Light fills take dark text so the label stays readable. */
	.tag[data-color='brand'] {
		--tag-bg: var(--color-brand-700);
		--tag-fg: white;
	}
	.tag[data-color='accent'] {
		--tag-bg: var(--color-accent);
		--tag-fg: white;
	}
	.tag[data-color='success'] {
		--tag-bg: var(--color-success);
		--tag-fg: var(--color-background);
	}
	.tag[data-color='warning'] {
		--tag-bg: var(--color-warning);
		--tag-fg: var(--color-background);
	}
	.tag[data-color='danger'] {
		--tag-bg: var(--color-danger);
		--tag-fg: var(--color-background);
	}
	.tag[data-color='muted'] {
		--tag-bg: var(--color-surface-hover);
		--tag-fg: var(--color-muted);
		border-color: var(--color-border);
	}

	.tag-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 1em;
		height: 1em;
		flex: none;
		line-height: 1;
	}

	/* Sizes caller-supplied inline SVG; colour comes from the pill via currentColor. */
	.tag-icon :global(svg) {
		width: 100%;
		height: 100%;
		display: block;
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
