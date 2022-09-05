<script>
    import dateFormat from 'dateformat';
    export let data;
    const { title, image, date, updated, content, author } = data;
</script>

<svelte:head>
    <title>Guide: {title} — 75grand</title>
</svelte:head>

<main class="bg-white">
    <img class="w-full" src="https://images.weserv.nl/?url={encodeURIComponent(image)}&w=1200&h=700&fit=cover" alt="">

    <div class="p-8 pb-16 max-w-2xl mx-auto space-y-4">
        <div class="space-y-2">
            <h1 class="text-3xl font-bold">{title}</h1>

            <p>
                <span>{dateFormat(date, 'mmmm d, yyyy', true)}</span>
                {#if updated}
                    <span>(Updated {dateFormat(updated, 'mmmm d, yyyy', true)})</span>
                {/if}

                <br>

                {#if author}
                    <p>by {author}</p>
                {/if}
            </p>
        </div>
    
        <hr>
    
        <article class="prose prose-sky max-w-none prose-slate text-base mx-auto">
            <svelte:component this={content} />
        </article>
    </div>
</main>