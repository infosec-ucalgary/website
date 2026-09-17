<script lang="ts">
	import { resolve } from '$app/paths';

	let { children } = $props();
</script>

<!-- TODO: admin shell (nav: Dashboard / Executives / Writeups / Intake / Mailing List, current user + logout) -->
<nav>
	<a href={resolve('/admin')}>Dashboard</a>
	<a href={resolve('/admin/executives')}>Executives</a>
	<a href={resolve('/admin/writeups')}>Writeups</a>
	<a href={resolve('/admin/intake')}>Intake</a>
	<a href={resolve('/admin/mailing-list')}>Mailing List</a>
</nav>

{@render children()}
