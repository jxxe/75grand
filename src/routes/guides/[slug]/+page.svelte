<script>
    import { DateTime } from 'luxon';
    export let data;
    const { title, image, date, updated, content, author } = data;
</script>

<svelte:head>
    <title>Guide: {title} — 75grand</title>
</svelte:head>

<main class="bg-white">
    <img class="w-full border-b" src="https://images.weserv.nl/?url={encodeURIComponent(image)}&w=1200&h=600&fit=cover" alt="">

    <div class="p-8 pb-16 max-w-2xl mx-auto space-y-4">
        <div class="space-y-2">
            <h1 class="text-3xl font-bold text-gray-700">{title}</h1>

            <div>
                {#if author}
                    <span>by {author}</span>
                    <span class="text-gray-400">•</span>
                {/if}

                <span>
                    <span>{DateTime.fromISO(date, { zone: 'utc' }).toFormat('MMM d, yyyy')}</span>

                    {#if updated}
                        <span class="text-gray-400">•</span>
                        <span>Updated {DateTime.fromISO(updated, { zone: 'utc' }).toFormat('MMM d, yyyy')}</span>
                    {/if}
                </span>
            </div>

        </div>
    
        <hr>
    
        <article class="prose prose-sky max-w-none prose-gray text-base mx-auto">
            <svelte:component this={content} />
        </article>
    </div>
</main>