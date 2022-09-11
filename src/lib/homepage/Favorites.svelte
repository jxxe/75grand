<script>
    import { favorites } from '$lib/stores.js';
    import Link from './Link.svelte';
    export let links;
    const getLinkById = id => Object.values(links).flat().find(link => link.id === id);
</script>

{#if $favorites.length > 0}
    <section class="p-8 mt-[-2rem] bg-amber-50 border-b">
        <h2 class="text-lg font-bold mb-4">Favorites</h2>

        <div class="grid grid-cols-display gap-4">
            {#each $favorites as linkId}
                {#if getLinkById(linkId)}
                    <Link link={getLinkById(linkId)}/>
                {/if}
            {/each}
        </div>
    </section>
{/if}