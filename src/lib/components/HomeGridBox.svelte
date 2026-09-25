<script lang="ts" module>
    export type BoxSize = 'small' | 'square' | 'wide' | 'tall' | 'hero';
</script>

<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        size?: BoxSize;
        children: Snippet;
    };

    let { size = 'small', children }: Props = $props();
</script>

<section class="box" data-size={size}>
    {@render children()}
</section>

<style>
    .box {
        border-radius: 1rem;
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        padding: 1.25rem;
        overflow: hidden;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    @media (min-width: 52rem) {
        .box[data-size='small']  { grid-column: span 1; grid-row: span 1; }
        .box[data-size='square'] { grid-column: span 2; grid-row: span 2; }
        .box[data-size='wide']   { grid-column: span 3; grid-row: span 1; }
        .box[data-size='tall']   { grid-column: span 1; grid-row: span 3; }
        .box[data-size='hero']   { grid-column: span 3; grid-row: span 2; }
    }
</style>