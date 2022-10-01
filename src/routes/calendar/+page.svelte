<svelte:head>
    <title>Calendar — 75grand</title>
</svelte:head>

<script>
    import { DateTime } from 'luxon';

    function formatEventDate(startDateObj, endDateObj) {
        const startDate = DateTime.fromJSDate(startDateObj, { zone: 'America/Chicago' });
        const endDate = DateTime.fromJSDate(endDateObj, { zone: 'America/Chicago' });

        let startFormat = `MMM d, h${startDate.minute !== 0 ? ':mm' : ''}${startDate.toFormat('a') !== endDate.toFormat('a') ? 'a' : ''}`;
        let endFormat = `h${endDate.minute !== 0 ? ':mm' : ''}a`;

        let formattedDate = startDate.toFormat(startFormat);
        if(endDate.isValid) formattedDate += '–' + endDate.toFormat(endFormat);
        return formattedDate.replace('AM', 'am').replace('PM', 'pm');
    }

    export let data;
    let selectedFilter = '';

    $: filteredEvents = data.events.filter(event => {
        if(selectedFilter === '') return true;
        return event.features?.length && event.features.flat().includes(selectedFilter);
    });
</script>

<main class="p-8 space-y-6">
    {#if data.uniqueFeatures.length}
        <div class="-mb-3">
            {#each data.uniqueFeatures as feature}
                <div
                    class:border-sky-700={selectedFilter === feature[0]}
                    class:!bg-sky-100={selectedFilter === feature[0]}
                    class:text-sky-700={selectedFilter === feature[0]}
                    on:click={() => selectedFilter = selectedFilter === feature[0] ? '' : feature[0]}
                    class="bg-white active:scale-95 cursor-pointer select-none hover:bg-gray-50 transition-[color,background-color,border-color,transform] border inline-flex mr-2 mb-3 items-center gap-3 py-2 px-4 rounded-full"
                >
                    <i class="fas fa-{feature[1]}"></i>
                    <span>{feature[0]}</span>
                </div>
            {/each}
        </div>
    {/if}

    <div class="grid gap-4 grid-cols-[min-content,1fr]">
        {#each filteredEvents as event, index}
            <div>
                <i class="fa-{{
                    0: 'graduation-cap text-orange-500',
                    1: 'person-running text-green-500',
                    2: 'message text-red-500',
                    3: 'masks-theater text-purple-500',
                    4: 'star text-yellow-500',
                    5: 'map-pin',
                    6: 'user-tie text-pink-500'
                }[event.calendarId] ?? 'calendar-day text-sky-700'} text-xl grid place-items-center border border-gray-200 w-[51px] aspect-square rounded-full bg-white fas"></i>
                {#if index+1 < filteredEvents.length}
                    <div class="ml-[calc(50%-1px)] h-full w-[1.5px] bg-gray-200"></div>
                {/if}
            </div>

            <a href={event.url} target="_blank" class="lg:flex lg:flex-row flex-col gap-2 w-fit p-3 rounded-lg bg-white hover:bg-gray-50 transition-colors border border-gray-200">
                <p class="whitespace-nowrap">{formatEventDate(event.start, event.end)}</p>
                <p class="font-semibold">{event.summary}</p>
            </a>
        {/each}
    </div>
</main>