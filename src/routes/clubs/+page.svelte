<svelte:head>
    <title>Student Groups — 75grand</title>
</svelte:head>

<script>
    export let data;
</script>

<main class="p-8 space-y-4">
    {#if data.clubs.length}
        {#each data.clubs as club}
            <div class="grid lg:grid-cols-[1fr,2fr] lg:gap-4 gap-2 bg-white px-4 py-3 rounded-lg border border-gray-200">
                <div class="space-y-1">
                    <h3 class="leading-5 font-semibold">{club.name}</h3>
                
                    {#if club.email}
                        <a class="w-fit max-w-full hover:text-sky-700 transition-colors flex gap-2 items-center" href="mailto:{club.email}">
                            <i class="fas text-sm fa-envelope"></i>
                            <span>{club.email}</span>
                        </a>
                    {/if}
                </div>

                <p>{club.description}</p>
            </div>
        {/each}
    {/if}
</main>