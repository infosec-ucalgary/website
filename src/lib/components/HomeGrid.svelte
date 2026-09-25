<script lang="ts">
    import type { Snippet } from 'svelte';

    let { children }: { children: Snippet } = $props();
</script>

<div class="home-grid">
    {@render children()}
</div>

<style>
    .home-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr;
    }

    @media (min-width: 52rem) {
        .home-grid {
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(9rem, auto);
            grid-auto-flow: dense;
        }
    }
</style>