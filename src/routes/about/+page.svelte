<script>
	import ExecCard from "$lib/components/ExecCard.svelte";

</script>

<div class="page">
    <ExecCard
        name="John Doe"
        team="Technology"
        description="The best executive to ever set foot in the club. Lorum ipsum dolor sit amet"
        image="https://placehold.co/600x400"
        quote="To piss or not to piss... that is the question"
    />
</div>

<style>
    .page {
        max-width: var(--content-max-width);
		margin: 0 auto;
		padding: 2rem var(--page-gutter);
    }
</style>