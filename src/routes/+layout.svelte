<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import SiteHeader from '$lib/components/SiteHeader.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>The UCalgary CyberSecurity Club</title>
</svelte:head>
<SiteHeader />
{@render children()}
