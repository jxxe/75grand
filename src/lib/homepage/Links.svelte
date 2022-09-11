<script>
	import Link from '$lib/homepage/Link.svelte';
	export let links;
</script>

{#each Object.entries(links) as [category, links]}
    <section class="px-8">
        <h2 class="text-lg font-bold mb-4">{category}</h2>

        <div class="grid grid-cols-display gap-4">
            {#each links as link}
                <Link link={link}/>
            {/each}
        </div>
    </section>
{/each}