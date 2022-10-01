<script>
    import { browser } from '$app/environment';

    let instructionsOpen = false;
    let isApple = false;

    if(browser) {
        isApple = (/iPhone|iPad/i).test(navigator.userAgent);
    }
</script>

<div class="standalone:hidden lg:hidden p-3 bg-gray-50 border-b flex gap-3 items-center text-sm">
    <img class="w-10 h-10 rounded-[25%] border" src="/files/pwa/icon.png" alt="">

    <div class="w-full leading-none mt-[-4px]">
        <h3 class="font-bold text-lg">Install 75grand</h3>
        <p class="text-gray-400">No download required</p>
    </div>

    <button on:click={() => instructionsOpen = true} class="uppercase bg-blue-500 text-white font-bold py-2 px-5 rounded-full">Get</button>
</div>

{#if isApple}
    <div class:hidden={!instructionsOpen} class="p-8 space-y-8 fixed top-0 w-screen h-screen z-50 bg-white">
        <h1 class="text-xl font-bold">How to add <span class="text-sky-700 font-bold font-serif text-2xl">75grand</span> to your iPhone or iPad home screen</h1>

        <div>
            <h2 class="font-bold text-lg">Step 1</h2>
            <p>
                <span>Tap</span>
                <i class="ml-1 text-blue-500 fas fa-arrow-up-from-bracket"></i>
            </p>
        </div>
        
        <div>
            <h2 class="font-bold text-lg">Step 2</h2>
            <p>
                <span>Tap</span>
                <span class="font-semibold inline-flex items-center gap-2">
                    <span>Add to Home Screen</span>
                    <i class="far fa-square-plus"></i>
                </span>
            </p>
        </div>

        <div>
            <h2 class="font-bold text-lg">Step 3</h2>
            <p>
                <span>Tap</span>
                <span class="font-bold text-blue-500">Add</span>
            </p>
        </div>

        <div>
            <h2 class="font-bold text-lg">Step 4</h2>
            <p>There is no step 4! 🥳</p>
        </div>
    </div>
{:else}
    <div class:hidden={!instructionsOpen} class="p-8 space-y-8 fixed top-0 w-screen h-screen z-50 bg-white">
        <h1 class="text-xl font-bold">How to add <span class="text-sky-700 font-bold font-serif text-2xl">75grand</span> to your Android phone's home screen</h1>

        <div>
            <h2 class="font-bold text-lg">Step 1</h2>
            <p>
                <span>Tap</span>
                <i class="mx-2 fas fa-ellipsis-vertical"></i>
                <span>(three-dots menu)</span>
            </p>
        </div>
        
        <div>
            <h2 class="font-bold text-lg">Step 2</h2>
            <p>
                <span>Tap</span>
                <span class="font-semibold">Add to Home screen</span>
            </p>
        </div>

        <div>
            <h2 class="font-bold text-lg">Step 3</h2>
            <p>
                <span>Tap</span>
                <span class="font-bold text-blue-500">Add</span>
                <span>then</span>
                <span class="font-bold text-blue-500">Add automatically</span>
            </p>
        </div>

        <div>
            <h2 class="font-bold text-lg">Step 4</h2>
            <p>There is no step 4! 🥳</p>
        </div>
    </div>
{/if}