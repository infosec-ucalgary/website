<script lang="ts" module>
	export type TickerMessage = {
		/** Text shown in the bar. */
		text: string;
		/**
		 * Optional link — clicking the message goes here. External links
		 * ("https://…", "mailto:…") open in a new tab; internal ones should be
		 * passed through `resolve()` by the caller.
		 */
		href?: string;
	};
</script>

<script lang="ts">
	import { tick } from 'svelte';

	import { isExternal } from '$lib/links';

	type Props = {
		/** Messages to cycle through, in order. Add/remove freely — nothing else to update. */
		messages: TickerMessage[];
		/** Milliseconds each message stays on screen. */
		interval?: number;
	};

	let { messages, interval = 4000 }: Props = $props();

	/** Must match the transition duration of .track below. */
	const SLIDE_MS = 450;

	let index = $state(0);
	let animate = $state(true);
	let paused = $state(false);

	let track: HTMLDivElement | undefined = $state();

	// Rendering one clone of the first message after the last lets the wheel keep
	// turning the same direction past the end; once the clone is showing we snap
	// back to the real first message with the transition off, so it's invisible.
	const rendered = $derived(messages.length > 1 ? [...messages, messages[0]] : messages);

	$effect(() => {
		if (messages.length < 2) {
			index = 0;
			return;
		}

		let resetTimer: ReturnType<typeof setTimeout> | undefined;

		const cycle = setInterval(() => {
			if (paused) return;
			index += 1;
			if (index === messages.length) {
				resetTimer = setTimeout(async () => {
					animate = false;
					index = 0;

					await tick();
					track?.getBoundingClientRect();

					animate = true;
				}, SLIDE_MS);
			}
		}, interval);

		return () => {
			clearInterval(cycle);
			clearTimeout(resetTimer);
		};
	});
</script>

{#if messages.length > 0}
	<!-- Pausing on hover/focus so a message can actually be clicked before it moves on. -->
	<div
		class="rotator"
		onmouseenter={() => (paused = true)}
		onmouseleave={() => (paused = false)}
		onfocusin={() => (paused = true)}
		onfocusout={() => (paused = false)}
		role="presentation"
	>
		<div class="track" class:animate bind:this={track} style="--index: {index}">
			{#each rendered as message, i (i)}
				{@const active = i === index}
				<div class="item" aria-hidden={active ? undefined : 'true'}>
					{#if message.href}
						<!-- the rule below can't see through the prop; the caller resolves internal routes -->
						<!-- eslint-disable svelte/no-navigation-without-resolve -->
						<a
							href={message.href}
							tabindex={active ? undefined : -1}
							target={isExternal(message.href) ? '_blank' : undefined}
							rel={isExternal(message.href) ? 'noreferrer noopener' : undefined}
						>
							{message.text}
						</a>
						<!-- eslint-enable svelte/no-navigation-without-resolve -->
					{:else}
						<span>{message.text}</span>
					{/if}
				</div>
			{/each}
		</div>
	</div>
{/if}

<style>
	.rotator {
		--item-h: 1.6rem;
		height: var(--item-h);
		overflow: hidden;
		font-size: 0.8rem;
		color: var(--color-muted);
		min-width: 0;
	}

	.track {
		display: flex;
		flex-direction: column;
		transform: translateY(calc(var(--index) * var(--item-h) * -1));
	}

	.track.animate {
		transition: transform 450ms ease-in-out;
	}

	.item {
		height: var(--item-h);
		display: flex;
		align-items: center;
	}

	.item > * {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.item a {
		color: inherit;
		text-decoration: none;
		border-radius: 0.3rem;
		transition: color 0.15s ease;
	}

	.item a:hover {
		color: var(--color-foreground);
		text-decoration: underline;
		text-underline-offset: 0.2em;
	}

	.item a:focus-visible {
		outline: 2px solid var(--color-brand-400);
		outline-offset: 2px;
	}

	@media (prefers-reduced-motion: reduce) {
		.track.animate {
			transition: none;
		}
	}
</style>
