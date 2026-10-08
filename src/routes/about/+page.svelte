<script lang="ts">
	import ExecCard from "$lib/components/ExecCard.svelte";
	import { RANKS } from "$lib/ranks";
	import { SvelteMap } from "svelte/reactivity";

    let { data } = $props();

    // President and Sr. VP get their own section above the teams
    const leadership = $derived(data.execs.filter((exec) => exec.rank <= RANKS.SR_VP));

    // execs arrive sorted by rank, so each team's group lists VPs, then Sr. Execs, then Jr. Execs
    const teams = $derived.by(() => {
        const groups = new SvelteMap<string, typeof data.execs>();
        for (const exec of data.execs) {
            if (exec.rank <= RANKS.SR_VP) continue;
            const group = groups.get(exec.team);
            if (group) group.push(exec);
            else groups.set(exec.team, [exec]);
        }
        return [...groups].sort(([a], [b]) => a.localeCompare(b));
    });
</script>

<div class="page">
    {#if leadership.length}
        <section class="team">
            <h2>Leadership</h2>
            <div class="team-grid">
                {#each leadership as exec (exec.id)}
                    <ExecCard
                        name={exec.name}
                        team={exec.title}
                        description={exec.description}
                        image={exec.img ?? undefined}
                        quote={exec.quote}
                    />
                {/each}
            </div>
        </section>
    {/if}

    {#each teams as [team, members] (team)}
        <section class="team">
            <h2>{team}</h2>
            <div class="team-grid">
                {#each members as exec (exec.id)}
                    <ExecCard
                        name={exec.name}
                        team={exec.title}
                        description={exec.description}
                        image={exec.img ?? undefined}
                        quote={exec.quote}
                    />
                {/each}
            </div>
        </section>
    {:else}
        {#if !leadership.length}
            <p>No execs listed yet.</p>
        {/if}
    {/each}
</div>

<style>
    .page {
        max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 2rem var(--page-gutter);
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .team h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
        gap: 1.5rem;
    }
</style>