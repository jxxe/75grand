<svelte:head>
    <title>Guides — 75grand</title>
</svelte:head>

<script>
    import { DateTime } from 'luxon';
    export let data; // {meta: {}, slug: ''}
</script>

<main class="p-8">
    <div class="grid grid-cols-display gap-4">
        {#each Object.values(data) as guide}
            <div class="bg-white hover:bg-slate-50 transition-colors rounded-lg overflow-hidden border border-slate-200">
                <a href="/guides/{guide.slug}">
                    <img class="border-b border-slate-200" src="https://images.weserv.nl/?url={encodeURIComponent(guide.meta.image)}&w=600&h=400&fit=cover" alt="">
                    <div class="py-3 px-4">
                        <h2 class="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{guide.meta.title}</h2>
                        <p>{DateTime.fromISO(guide.meta.updated ?? guide.meta.date).toFormat('MMMM d, yyyy')}</p>
                    </div>
                </a>
            </div>
        {/each}

        <a href="https://forms.gle/34PBLfyLBGSRisqg6" target="_blank" class="p-8 flex flex-col items-center justify-center border-2 border-dashed hover:border-solid border-slate-300 rounded-lg">
            <i class="text-2xl fas fa-plus"></i>
            <span class="text-lg font-semibold">Create a Guide</span>
            <span class="text-slate-400">Share your wisdom</span>
        </a>
    </div>
</main>