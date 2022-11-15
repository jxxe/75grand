<script>
    export let data;
    const items = data.response.items;
</script>

<svelte:head>
    <title>Logos — 75grand</title>
</svelte:head>

<main class="p-8 space-y-6">
    <div class="space-y-2">
        <h1 class="text-3xl font-bold">Logo Collection</h1>

        <div>
            <p class="text-gray-400 leading-snug">An archive of department, club, and college logos found around campus and online</p>
            <p class="text-gray-400 leading-snug group">
                Please <a class="text-sky-700 hover:underline peer" href="mailto:jpaulos@macalester.edu">contact me</a> if you have any additions or higher-resolution copies
                <span class="text-sm hidden peer-hover:inline italic">I have a soft spot for variations of the tartan crest :)</span>
            </p>
        </div>
    </div>

    <div class="grid grid-cols-display gap-4">
        {#each items as item}
            <div class="bg-white p-4 rounded-lg border space-y-4">
                <p title={item.title} class="overflow-hidden whitespace-nowrap text-ellipsis">{item.title}</p>
    
                <div class="bg-gray-100 rounded-md p-4">
                    <a class="cursor-zoom-in" href={item.cover} target="_blank">
                        <img src="https://wsrv.nl//?url={encodeURIComponent(item.cover)}&w=400&h=400&fit=contain&output=webp" alt={item.title}>
                    </a>
                </div>
            </div>
        {/each}
    </div>
</main>