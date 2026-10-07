<script lang="ts">
	import ExecCard from "$lib/components/ExecCard.svelte";

    let { data } = $props();
</script>

<div class="page">
    {#each data.execs as exec (exec.id) }
        <ExecCard
            name={exec.name}
            team={exec.team}
            description={exec.description}
            image={exec.img ?? undefined}
            quote={exec.quote}
        />
    {/each}
</div>

<style>
    .page {
        max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 2rem var(--page-gutter);
    }
</style>