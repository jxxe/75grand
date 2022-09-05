<svelte:head>
    <title>Calendar — 75grand</title>
</svelte:head>

<script>
    import dateFormat from 'dateformat';
    export let data;

    function formatEventDate(startTimeString, endTimeString) {
        let startTimeMask = dateFormat(startTimeString, 'MM') === '00' ? 'h' : 'h:MM';
        if(dateFormat(startTimeString, 'tt') !== dateFormat(endTimeString, 'tt')) startTimeMask += 'tt';

        let startDateMask = dateFormat(null, 'yyyy-mm-dd') === dateFormat(startTimeString, 'yyyy-mm-dd') ? '"Today"' : 'mmm d';
        if(dateFormat(startTimeString, 'yyyy') !== dateFormat(null, 'yyyy')) startDateMask += ', yyyy';

        const startDate = dateFormat(startTimeString, startDateMask);
        const startTime = dateFormat(startTimeString, startTimeMask);

        const endTimeMask = dateFormat(endTimeString, 'MM') === '00' ? 'htt' : 'h:MMtt';
        const endTime = dateFormat(endTimeString, endTimeMask);

        return `${startDate}, ${startTime}–${endTime}`;
    }
</script>

<main class="p-8">
    {#each data.events as event, index}
        {#if new Date(event.end).getTime() > Date.now()}
 
            <div class="grid gap-4 grid-cols-[min-content,1fr]">
                <div>
                    <img class="rounded-full max-w-none w-[75px]" src="/calendar/image?url={encodeURIComponent(event.url)}" alt="">

                    {#if index+1 < data.events.length}
                        <div class="ml-[calc(50%-1px)] h-full w-[1.5px] bg-slate-200"></div>
                    {/if}
                </div>

                <a href={event.url} target="_blank" class="w-fit mb-6 p-3 rounded-lg bg-white hover:bg-slate-50 transition-colors border border-slate-200">
                    <p class="font-semibold">{event.summary}</p>

                    <p>
                        <span>{formatEventDate(event.start, event.end)}</span>

                        {#if event.location}
                            <span class="text-slate-400">•</span>
                            <span>{event.location}</span>
                        {/if}
                    </p>
                </a>
            </div>

        {/if}
    {/each}
</main>