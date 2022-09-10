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
    {Math.round((Date.now() - data.currentTime) / 100) / 10}s ago<br><br>
    <div class="grid gap-4 grid-cols-[min-content,1fr]">
    {#each data.events as event, index}
        {#if new Date(event.end).getTime() > Date.now()}
 
                <div>
                    <i class="fa-{{
                        4: 'graduation-cap text-orange-500',
                        5: 'person-running text-green-500',
                        7: 'message text-red-500',
                        8: 'masks-theater text-purple-500',
                        15: 'map-pin',
                        24: 'film text-pink-500'
                    }[event.calendarId] ?? 'calendar-day text-sky-700'} text-xl grid place-items-center border border-slate-200 w-[51px] aspect-square rounded-full bg-white fas"></i>
                    {#if index+1 < data.events.length}
                        <div class="ml-[calc(50%-1px)] h-full w-[1.5px] bg-slate-200"></div>
                    {/if}
                </div>

                <a href={event.url} target="_blank" class="flex gap-2 w-fit p-3 rounded-lg bg-white hover:bg-slate-50 transition-colors border border-slate-200">
                    <p>{formatEventDate(event.start, event.end)}</p>
                    <p class="font-semibold">{event.summary}</p>
                </a>
                
            {/if}
        {/each}
    </div>
</main>