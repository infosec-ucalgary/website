<script lang="ts">
	let { children } = $props();
</script>

<!-- TODO: admin shell (current user + logout). Section nav lives in $lib/components/AdminNav.svelte, rendered by SiteHeader. -->

{@render children()}
