<script lang="ts">
	import { isExternal } from '$lib/links';

	type Link = {
		display: string;
		href: string;
	};

	type Props = {
		title: string;
		links: Link[];
	};

	let { title, links }: Props = $props();
</script>

<div class="link-column-container">
	<div class="link-column-inner">
		<h6 class="column-title">{title}</h6>
		<!-- eslint-disable svelte/no-navigation-without-resolve -->
        <hr>
		<ul class="column-links">
			{#each links as link (link.display)}
				<li>
					<a
						class="column-link"
						href={link.href}
						target={isExternal(link.href) ? '_blank' : undefined}
						rel={isExternal(link.href) ? 'noreferrer noopener' : undefined}
					>
						{link.display}
					</a>
				</li>
			{/each}
		</ul>
		<!-- eslint-enable svelte/no-navigation-without-resolve -->
	</div>
</div>

<style>
    .link-column-container {
		display: flex;
		flex-direction: row-reverse;
		align-items: end;
    }

	.link-column-inner {
		padding: 10px;
		
	}

    .column-title {
        padding-bottom: 0;
        margin-bottom: 0;
		font-size: 12px;
    }

	.column-links {
		list-style: none;
		margin: 0;
		padding: 0;
	}

    .column-link {
        color: var(--color-muted);
        font-size: 10px;
    }

    .column-link:hover {
        text-decoration: underline;
    }

    hr {
        margin-top: 0;
        padding-top: 0;
    }
</style>
