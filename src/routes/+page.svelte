<svelte:head>
	<title>75grand</title>
</svelte:head>

<script>
	import LinkResource from './LinkResource.svelte';
	import { favorites } from '../lib/stores.js';
	export let data;
	const getLinkById = id => Object.values(data).flat().find(link => link.id === id);
</script>

<main class="space-y-8 py-8">
	{#if $favorites.length > 0}
		<section class="px-8">
			<h2 class="text-lg font-bold mb-4">Favorites</h2>

			<div class="grid grid-cols-display gap-4">
				{#each $favorites as linkId}
					{#if getLinkById(linkId)}
						<LinkResource link={getLinkById(linkId)}/>
					{/if}
				{/each}
			</div>
		</section>
	{/if}

	<!-- <section class="px-8">
		calendar here
	</section> -->
	
	{#each Object.entries(data) as [category, links]}
		<section class="px-8">
			<h2 class="text-lg font-bold mb-4">{category}</h2>
	
			<div class="grid grid-cols-display gap-4">
				{#each links as link}
					<LinkResource link={link}/>
				{/each}
			</div>
		</section>
	{/each}
</main>