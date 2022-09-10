<svelte:head>
    <title>WMCN — 75grand</title>
</svelte:head>

<script>

    import { beforeNavigate } from '$app/navigation';
    import { browser } from '$app/environment';

    export let data; // { title: '', time: '' }

    let audio;
    let audioData = [];
    let status = 1; // 0 = ready, 1 = loading, 2 = playing
    let clickRequired = true;

    let handleClick;

    // There's lots of shenanigans with undefined variables since this can only run on the client
    if(browser && true) {

        // Stop audio when switching pages
        beforeNavigate(() => audio && audio.pause());

        audio = new Audio('https://stream.wmcn.fm:8443/wmcn');
        audio.crossOrigin = 'anonymous';
        audio.addEventListener('loadeddata', () => status = 0);

        // Check if user interaction is required
        const testAudioElement = document.createElement('audio');
        testAudioElement.addEventListener('play', () => clickRequired = false);
        testAudioElement.play().catch(error => {});

        function startViz() {
            const stream = audio.captureStream(); // MediaStream
            const context = new AudioContext(); // AudioContext
            const source = context.createMediaStreamSource(stream); // MediaStreamAudioSourceNode

            const analyzer = context.createAnalyser(); // AnalyserNode
            source.connect(analyzer);
            analyzer.smoothingTimeConstant = 0.5;
            analyzer.fftSize = 32;

            const bufferLength = analyzer.frequencyBinCount;
            const frequencyData = new Uint8Array(bufferLength);

            function renderFrame() {
                analyzer.getByteFrequencyData(frequencyData);
                const dataMap = {0: 15, 1: 10, 2: 8, 3: 9, 4: 6, 5: 5, 6: 2, 7: 1, 8: 0, 9: 4, 10: 3, 11: 7, 12: 11, 13: 12, 14: 13, 15: 14};
                const values = Object.values(frequencyData);

                audioData = [];
                for(let i = 0; i < 16; i++) {
                    const value = values[dataMap[i]] / 255;
                    audioData.push(value);
                }

                const maxData = Math.max(...audioData);
                const timesToOne = 1 / maxData;
                audioData = audioData.map(value => value * timesToOne);

                requestAnimationFrame(renderFrame);
            }

            requestAnimationFrame(renderFrame);
        }

        handleClick = () => {
            if(status === 0) {
                audio.play();
                status = 2;
                startViz();
            } else if(status === 2 && audio) {
                audio.pause();
                status = 0;
            }
        }

    }

</script>

<main class="p-8 flex flex-col gap-8 h-full items-center justify-center">
    <h2 class="flex gap-1 text-4xl font-['Futura','Helvetica_Neue',sans-serif]">
        <span>W</span>
        <span class="text-orange-300">M</span>
        <span class="text-blue-400">C</span>
        <span class="text-rose-900">N</span>
    </h2>

    <div class="flex gap-2 items-center">
        {#if status === 0} 
            {#each Array(16) as _, i}
                <div class="w-2 h-24 bg-current opacity-20"></div>
            {/each}
        {/if}

        {#if status === 1} 
            {#each Array(16) as _, i}
                <div class="w-2 h-24 bg-current animate-ping" style="transform:scale(1)!important;animation-delay:{i/32}s"></div>
            {/each}
        {/if}

        {#if status === 2}
            {#each audioData as value}
                <div class="w-2 h-24 bg-current" style="transform:scaleY({value});opacity:{value}"></div>
            {/each}
        {/if}
    </div>

    {#if data.title && data.time}
        <div class="text-center">
            <h3 class="font-bold text-lg">{data.title}</h3>
            <p class="text-slate-400">{data.time}</p>
        </div>
    {/if}

    <button disabled={status === 1} class:opacity-75={status === 1} class:cursor-wait={status === 1} class="bg-sky-700 text-white flex gap-3 items-center py-2 px-4 font-semibold rounded-lg" on:click={handleClick()}>
        {#if status < 2}
            <i class="fas fa-radio"></i>
            <span>Start Streaming</span>
        {:else if status === 2}
            <i class="fas fa-pause"></i>
            <span>Pause</span>
        {/if}
    </button>
</main>