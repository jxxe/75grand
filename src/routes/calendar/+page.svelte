<svelte:head>
    <title>Calendar — 75grand</title>
</svelte:head>

<script>
    import { DateTime } from 'luxon';
    export let data;

    function formatEventDate(startTimeString, endTimeString) {
        const startDate = DateTime.fromJSDate(startTimeString, { zone: 'America/Chicago' });
        const endDate = DateTime.fromJSDate(endTimeString, { zone: 'America/Chicago' });

        let startFormat = `MMM d, h${startDate.minute !== 0 ? ':mm' : ''}${startDate.toFormat('a') !== endDate.toFormat('a') ? 'a' : ''}`;
        let endFormat = `h${endDate.minute !== 0 ? ':mm' : ''}a`;

        let formattedDate = startDate.toFormat(startFormat);
        if(endDate.isValid) formattedDate += '–' + endDate.toFormat(endFormat);
        return formattedDate.replace('AM', 'am').replace('PM', 'pm');
    }
</script>

<main class="p-8">
    <div class="grid gap-4 grid-cols-[min-content,1fr]">
        {#each data.events as event, index}
            <div>
                <i class="fa-{{
                    4: 'graduation-cap text-orange-500',
                    5: 'person-running text-green-500',
                    7: 'message text-red-500',
                    8: 'masks-theater text-purple-500',
                    13: 'star text-yellow-500',
                    15: 'map-pin',
                    24: 'film text-pink-500'
                }[event.calendarId] ?? 'calendar-day text-sky-700'} text-xl grid place-items-center border border-slate-200 w-[51px] aspect-square rounded-full bg-white fas"></i>
                {#if index+1 < data.events.length}
                    <div class="ml-[calc(50%-1px)] h-full w-[1.5px] bg-slate-200"></div>
                {/if}
            </div>

            <a href={event.url} target="_blank" class="lg:flex lg:flex-row flex-col gap-2 w-fit p-3 rounded-lg bg-white hover:bg-slate-50 transition-colors border border-slate-200">
                <p class="whitespace-nowrap">{formatEventDate(event.start, event.end)}</p>
                <p class="font-semibold">{event.summary}</p>
            </a>
        {/each}
    </div>
</main>