<script>
    import { onMount } from 'svelte';
    import { DateTime } from 'luxon';
	
    let now = getDate();

    function getDate() {
        return DateTime.now().setZone('America/Chicago');
    }

    onMount(() => {
        const interval = setInterval(() => now = getDate(), 1000);
        return () => clearInterval(interval); // stop interval when component is removed
    });

    const minute = 1000*60;
    const hour = minute*60;
    const day = hour*24;

    const libraryHours = [
        [false, 'opens at 10am', 0],
        [true, 'closes at 1am', 10*hour],
        [false, 'opens at 8am', 1*day+1*hour],
        [true, 'closes at 1am', 1*day+8*hour],
        [false, 'opens at 8am', 2*day+1*hour],
        [true, 'closes at 1am', 2*day+8*hour],
        [false, 'opens at 8am', 3*day+1*hour],
        [true, 'closes at 1am', 3*day+8*hour],
        [false, 'opens at 8am', 4*day+1*hour],
        [true, 'closes at 1am', 4*day+8*hour],
        [false, 'opens at 8am', 5*day+1*hour],
        [true, 'closes at 8pm', 5*day+8*hour],
        [false, 'opens at 10am', 5*day+20*hour],
        [true, 'closes at 8pm', 6*day+10*hour],
        [false, 'opens at 10am', 6*day+20*hour]
    ];

    const helpDeskHours = [
        [false, 'opens at noon', 0],
        [true, 'closes at 10pm', 12*hour],
        [false, 'opens at 8am', 22*hour],
        [true, 'closes at 9pm', 1*day+8*hour],
        [false, 'opens at 8am', 1*day+20*hour],
        [true, 'closes at 9pm', 2*day+8*hour],
        [false, 'opens at 8am', 2*day+20*hour],
        [true, 'closes at 9pm', 3*day+8*hour],
        [false, 'opens at 8am', 3*day+20*hour],
        [true, 'closes at 9pm', 4*day+8*hour],
        [false, 'opens at 8am', 4*day+20*hour],
        [true, 'closes at 4:45pm', 5*day+8*hour],
        [false, 'opens at noon', 5*day+16*hour+45*minute],
        [true, 'closes at 6pm', 6*day+12*hour],
        [false, 'opens at noon', 6*day+18*hour]
    ];

    const cafeMacHours = [
        [false, 'brunch at 10am', 0],
        [true, 'brunch till 1:30pm', 10*hour],
        [false, 'dinner at 5pm', 13*hour+30*minute],
        [true, 'dinner till 7pm', 17*hour],
        [false, 'breakfast at 7:30am', 19*hour],

        [true, 'breakfast till 10am', 1*day+7*hour+30*minute],
        [false, 'lunch at 11am', 1*day+10*hour],
        [true, 'lunch till 1:30pm', 1*day+11*hour],
        [false, 'dinner at 5pm', 1*day+13*hour+30*minute],
        [true, 'dinner till 8pm', 1*day+17*hour],
        [false, 'breakfast at 7:30am', 1*day+20*hour],

        [true, 'breakfast till 10am', 2*day+7*hour+30*minute],
        [false, 'lunch at 11am', 2*day+10*hour],
        [true, 'lunch till 1:30pm', 2*day+11*hour],
        [false, 'dinner at 5pm', 2*day+13*hour+30*minute],
        [true, 'dinner till 8pm', 2*day+17*hour],
        [false, 'breakfast at 7:30am', 2*day+20*hour],

        [true, 'breakfast till 10am', 3*day+7*hour+30*minute],
        [false, 'lunch at 11am', 3*day+10*hour],
        [true, 'lunch till 1:30pm', 3*day+11*hour],
        [false, 'dinner at 5pm', 3*day+13*hour+30*minute],
        [true, 'dinner till 8pm', 3*day+17*hour],
        [false, 'breakfast at 7:30am', 3*day+20*hour],

        [true, 'breakfast till 10am', 4*day+7*hour+30*minute],
        [false, 'lunch at 11am', 4*day+10*hour],
        [true, 'lunch till 1:30pm', 4*day+11*hour],
        [false, 'dinner at 5pm', 4*day+13*hour+30*minute],
        [true, 'dinner till 8pm', 4*day+17*hour],
        [false, 'breakfast at 7:30am', 4*day+20*hour],

        [true, 'breakfast till 10am', 5*day+7*hour+30*minute],
        [false, 'lunch at 11am', 5*day+10*hour],
        [true, 'lunch till 1:30pm', 5*day+11*hour],
        [false, 'dinner at 5pm', 5*day+13*hour+30*minute],
        [true, 'dinner till 8pm', 5*day+17*hour],
        [false, 'brunch at 10am', 5*day+20*hour],

        [true, 'brunch till 1:30pm', 6*day+10*hour],
        [false, 'dinner at 5pm', 6*day+13*hour+30*minute],
        [true, 'dinner till 7pm', 6*day+17*hour],
        [false, 'breakfast at 7:30am', 6*day+19*hour],
    ];

    const grilleHours = [
        [false, 'opens at 10am', 0],
        [true, 'closes at 10pm', 10*hour],
        [false, 'opens at 7:30am', 22*hour],
        [true, 'closes at 10pm', 1*day+7*hour+30*minute],
        [false, 'opens at 7:30am', 1*day+22*hour],
        [true, 'closes at 10pm', 2*day+7*hour+30*minute],
        [false, 'opens at 7:30am', 2*day+22*hour],
        [true, 'closes at 10pm', 3*day+7*hour+30*minute],
        [false, 'opens at 7:30am', 3*day+22*hour],
        [true, 'closes at 10pm', 4*day+7*hour+30*minute],
        [false, 'opens at 7:30am', 4*day+22*hour],
        [true, 'closes at 10pm', 5*day+7*hour+30*minute],
        [false, 'opens at 10am', 5*day+22*hour],
        [true, 'closes at 10pm', 6*day+10*hour],
        [false, 'opens at 10am', 5*day+22*hour]
    ];

    const simpliciteaHours = date => {
        if(date.hour >= 10 && date.hour < 21) return [true, 'closes at 9pm'];
        return [false, 'opens at 10am'];
    };

    const senchaHours = date => {
        if(date.hour >= 11 && date.hour < 21) return [true, 'closes at 9pm'];
        return [false, 'opens at 11am'];
    };

    function evaluateSchedule(schedule, date = null) {
        date = date ?? getDate();
        let result = null;

        if(typeof schedule === 'function') {
            result = schedule(date);
        } else if(Array.isArray(schedule)) {
            const timestamp = date.toMillis();
            const prevSunday = date.weekdayLong === 'Sunday' ? date.startOf('day') : date.minus({ days: date.weekday }).startOf('day');
    
            for(let i = 0; i < schedule.length; i++) {
                const startTime = prevSunday + schedule[i][2];
                const endTime = prevSunday + (i+1 < schedule.length ? schedule[i + 1][2] : day*7);
    
                if(timestamp >= startTime && timestamp < endTime) {
                    result = schedule[i];
                    break;
                }
            }
        }

        if(result === null) result = [false, 'ERROR'];

        return {
            boolean: result[0],
            text: result[1],
            class: result[0] ? 'bg-green-500' : 'bg-red-500'
        };
    }
</script>

<div class="bg-white px-4 py-3 space-y-2 rounded-lg border border-slate-200">
    <div class="flex gap-4 items-center justify-between">
        <div class="flex gap-2 items-center">
            <div class="w-3 h-3 rounded-full {evaluateSchedule(libraryHours, now).class}"></div>
            <span class="font-semibold whitespace-nowrap">Library</span>
        </div>
        <span class="text-slate-400 text-right">{evaluateSchedule(libraryHours, now).text}</span>
    </div>

    <div class="flex gap-4 items-center justify-between">
        <div class="flex gap-2 items-center">
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="font-semibold whitespace-nowrap">The Link</span>
        </div>
        <span class="text-slate-400 text-right">open 24/7</span>
    </div>

    <div class="flex gap-4 items-center justify-between">
        <div class="flex gap-2 items-center">
            <div class="w-3 h-3 rounded-full {evaluateSchedule(helpDeskHours, now).class}"></div>
            <span class="font-semibold whitespace-nowrap">ITS Help Desk</span>
        </div>
        <span class="text-slate-400 text-right">{evaluateSchedule(helpDeskHours, now).text}</span>
    </div>

    <hr>

    <div class="flex gap-4 items-center justify-between">
        <div class="flex gap-2 items-center">
            <div class="w-3 h-3 rounded-full {evaluateSchedule(cafeMacHours, now).class}"></div>
            <span class="font-semibold whitespace-nowrap">Café Mac</span>
        </div>
        <span class="text-slate-400 text-right">{evaluateSchedule(cafeMacHours, now).text}</span>
    </div>

    <div class="flex gap-4 items-center justify-between">
        <div class="flex gap-2 items-center">
            <div class="w-3 h-3 rounded-full {evaluateSchedule(grilleHours, now).class}"></div>
            <span class="font-semibold whitespace-nowrap">Grille</span>
        </div>
        <span class="text-slate-400 text-right">{evaluateSchedule(grilleHours, now).text}</span>
    </div>

    <div class="flex gap-4 items-center justify-between">
        <div class="flex gap-2 items-center">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <span class="font-semibold whitespace-nowrap">Nessie's</span>
        </div>
        <span class="text-slate-400 text-right">temporarily closed</span>
    </div>

    <hr>

    <div class="flex gap-4 items-center justify-between">
        <div class="flex gap-2 items-center">
            <div class="w-3 h-3 rounded-full {evaluateSchedule(simpliciteaHours, now).class}"></div>
            <span class="font-semibold whitespace-nowrap">Simplicitea</span>
        </div>
        <span class="text-slate-400 text-right">{evaluateSchedule(simpliciteaHours, now).text}</span>
    </div>

    <div class="flex gap-4 items-center justify-between">
        <div class="flex gap-2 items-center">
            <div class="w-3 h-3 rounded-full {evaluateSchedule(senchaHours, now).class}"></div>
            <span class="font-semibold whitespace-nowrap">Sencha Tea Bar</span>
        </div>
        <span class="text-slate-400 text-right">{evaluateSchedule(senchaHours, now).text}</span>
    </div>

    <hr>

    <p class="italic text-sm text-slate-400">Holidays may affect these hours</p>
</div>