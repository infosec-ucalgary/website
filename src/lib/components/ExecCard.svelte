<script lang="ts">
    type Props = {
        name: string;
        team: string;
        image?: string;
        quote?: string;
        description: string;
    };

    let { name, team, image, quote, description }: Props = $props();
</script>

<article class="card">
    <header class="top">
        <h3 class="name">{name}</h3>
        <span class="team">{team}</span>
    </header>

    <div class="picture">
        {#if image}
            <img src={image} alt={name} loading="lazy" />
        {/if}

        {#if quote}
            <p class="quote">“{quote}”</p>
        {/if}
    </div>

    <p class="description">{description}</p>
</article>

<style>
    .card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1rem;
        border-radius: var(--border-radius);
        border: 1px solid var(--color-border);
        background: var(--color-surface);
        min-width: 0;
        max-width: 20rem;
        max-height: 32rem;
    }

    .top {
        display: flex;
        gap: 0.5rem;
    }

    .name,
    .team {
        border: 1px solid var(--color-border);
        border-radius: calc(var(--border-radius) / 2);
        padding: 0.5rem 0.75rem;
        margin: 0;
    }

    .name {
        flex: 1;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .team {
        font-size: 0.85rem;
        white-space: nowrap;
        align-self: center;
    }

    .picture {
        position: relative;
        flex: none;
        aspect-ratio: 1 / 1;
        border: 1px solid var(--color-border);
        border-radius: calc(var(--border-radius) / 2);
        overflow: hidden;
        background: var(--color-background);
    }

    .picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .quote {
        position: absolute;
        left: 0.5rem;
        right: 0.5rem;
        bottom: 0.5rem;
        margin: 0;
        padding: 0.5rem 0.75rem;
        font-size: 0.85rem;
        font-style: italic;
        border: 1px solid var(--color-border);
        border-radius: calc(var(--border-radius) / 2);
        background: color-mix(in srgb, var(--color-surface) 85%, transparent);
    }

    .description {
        margin: 0;
        padding: 0.75rem;
        min-height: 4rem;
        overflow-y: auto;
        font-size: 0.9rem;
        border: 1px solid var(--color-border);
        border-radius: calc(var(--border-radius) / 2);
    }
</style>