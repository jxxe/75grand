<svelte:head>
    <title>Macalester Campus Map — 75grand</title>
</svelte:head>

<script>
    const maps = {
        stPaul: 'https://map.concept3d.com/?id=211&mch&tbh&sbh#!ct/2556,2560,2557,2558?z/16.3',
        // stPaul: 'https://felt.com/embed/map/Macalester-Campus-GUYw4QG3Q8GoEQ0pw9CECoA?lat=44.938361&lon=-93.168103&zoom=16.3',
        ordway: 'https://felt.com/embed/map/Macalester-Campus-GUYw4QG3Q8GoEQ0pw9CECoA?lat=44.805939&lon=-93.01843&zoom=15'
    };

    let currentMap = 'stPaul';
</script>

<main class="relative h-full">
    <select bind:value={currentMap} class="form-select border-none !ring-0 shadow-lg rounded-lg absolute py-2 px-3 pr-9 top-4 left-4">
        <option value="stPaul">Saint Paul Campus</option>
        <option value="ordway">Ordway Field Station</option>
    </select>

    <iframe
        class="w-full h-full"
        title="Embedded campus map"
        src={maps[currentMap]}
    ></iframe>
</main>