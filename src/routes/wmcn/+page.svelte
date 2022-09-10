<svelte:head>
    <title>WMCN — 75grand</title>
</svelte:head>

<script>

    import { onDestroy } from 'svelte';
    import Spinner from '../../lib/Spinner.svelte';
    import { browser } from '$app/environment';

    export let data; // { title: '', time: '' }

    let audioData = [];
    let status = 0; // 0 = click required to play, 1 = clicked, audio is loading, 2 = audio is playing
    let startViz;

    // There's lots of shenanigans with undefined variables since this can only run on the client
    if(browser && true) {

        let audio;
        onDestroy(() => audio && audio.pause());

        startViz = () => {
            if(status > 0) return;
            status = 1;

            // audio = new Audio('https://stream.wmcn.fm:8443/wmcn'); // HTMLMediaElement
            audio = new Audio('https://wpr-ice.streamguys1.com/wpr-ideas-mp3-64'); // HTMLMediaElement
            audio.crossOrigin = 'anonymous';

            audio.addEventListener('loadeddata', () => {
                audio.play();

                if(audio.readyState >= 2) {
                    const stream = audio.captureStream(); // MediaStream
                    const context = new AudioContext(); // AudioContext
                    const source = context.createMediaStreamSource(stream); // MediaStreamAudioSourceNode

                    const analyzer = context.createAnalyser(); // AnalyserNode
                    source.connect(analyzer);
                    analyzer.smoothingTimeConstant = 0.5;
                    analyzer.fftSize = 32; // try 256 as well

                    const bufferLength = analyzer.frequencyBinCount;
                    const frequencyData = new Uint8Array(bufferLength);

                    function renderFrame() {
                        analyzer.getByteFrequencyData(frequencyData);
                        const dataMap = {0: 15, 1: 10, 2: 8, 3: 9, 4: 6, 5: 5, 6: 2, 7: 1, 8: 0, 9: 4, 10: 3, 11: 7, 12: 11, 13: 12, 14: 13, 15: 14};
                        const values = Object.values(frequencyData);

                        if(values.reduce((a, b) => a + b) !== 0) status = 2;

                        audioData = [];
                        for(let i = 0; i < 16; i++) {
                            const value = values[dataMap[i]] / 255;
                            audioData.push(value);
                        }

                        requestAnimationFrame(renderFrame);
                    }

                    requestAnimationFrame(renderFrame);
                }
            });
        }

        // Check if user interaction is required, if not, advance status
        const testAudioElement = document.createElement('audio');
        testAudioElement.addEventListener('play', startViz);
        testAudioElement.play().catch(error => {});

    }

</script>

<main class="p-8 flex flex-col gap-4 h-full items-center justify-center">
    <h2 class="flex gap-1 text-4xl font-['Futura','Helvetica_Neue',sans-serif]">
        <span>W</span>
        <span class="text-orange-300">M</span>
        <span class="text-blue-400">C</span>
        <span class="text-rose-900">N</span>
    </h2>

    <div class="flex gap-2 items-center">
        {#if status === 2}
            {#each audioData as value}
                <div class="w-2 h-24 bg-current" style="opacity:{value};transform:scaleY({value})"></div>
            {/each}
        {/if}

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
    </div>

    <!-- {#if status === 1}
        <div class="w-5 h-5">
            <Spinner color="currentColor"/>
        </div>
    {/if} -->

    {#if data.title && data.time}
        <div class="text-center">
            <h3 class="font-bold text-lg">{data.title}</h3>
            <p class="text-slate-400">{data.time}</p>
        </div>
    {/if}

    <button disabled={status === 1} class:opacity-75={status === 1} class:cursor-wait={status === 1} class="bg-sky-700 text-white flex gap-3 items-center py-2 px-4 font-semibold rounded-lg" on:click={startViz()}>
        {#if status < 2}
            <i class="fas fa-radio"></i>
            <span>Start Streaming</span>
        {:else if status === 2}
            <i class="fas fa-stop"></i>
            <span>Stop Streaming</span>
        {/if}
    </button>
</main>