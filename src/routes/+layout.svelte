<script lang="ts">
	import './layout.css';
	
	import favicon from '$lib/assets/favicon.svg';
	import SiteHeader from '$lib/components/SiteHeader.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<title>The UCalgary CyberSecurity Club</title>

	<!-- Import custom fonts here -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- Show sit header on every page -->
<SiteHeader />

{@render children()}
