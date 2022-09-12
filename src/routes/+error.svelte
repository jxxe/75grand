<script>
    import { page } from '$app/stores';
    console.error($page.error.message);
</script>

<svelte:head>
    <title>{$page.status} — 75grand</title>
</svelte:head>

<main class="p-8">
    <h1 class="text-5xl">
        <span>{$page.status}</span>
        {#if $page.status === 404}
            <span class="text-xl mt-2 text-slate-400">Page lost in Olin-Rice</span>
        {:else}
            <span>Error</span>
        {/if}
    </h1>
</main>