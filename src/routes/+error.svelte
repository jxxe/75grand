<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status} — 75grand</title>
</svelte:head>

<main class="p-8">
    <h1 class="text-5xl">
        <span>{$page.status}</span>
        {#if $page.status === 404}
            <span class="text-xl mt-2 text-gray-400">Page lost in Olin-Rice</span>
        {:else}
            <span>Error</span>
        {/if}
    </h1>

    <a
        class="bg-sky-700 hover:bg-sky-800 transition-colors text-white px-4 py-2 rounded-lg block w-fit mt-4"
        href="https://docs.google.com/forms/d/e/1FAIpQLSd3-u4WhB-5s3MTJgABT_C805gb-BxBRGxzt5nMIZmQocFuKw/viewform?usp=pp_url&entry.1334788470=Error+Code:+{$page.status}%0APage:+{encodeURIComponent($page.url)}%0A%0AAnything+else?"
    >
        <i class="fas fa-triangle-exclamation mr-2"></i>
        <span>Report Error</span>
    </a>
</main>