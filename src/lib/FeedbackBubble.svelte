<script>
    import { fade, slide } from 'svelte/transition';
    let open = false;
</script>

{#if open}
    <div
        in:fade={{duration: 200}} out:fade={{duration: 200}}
        on:click={() => open = false}
        class="z-50 w-screen h-screen bg-black/50 fixed top-0 left-0"
    ></div>
{/if}

<div class="z-50 px-8 w-full md:w-fit fixed bottom-0 right-0 flex flex-col gap-4 items-end">
    {#if open}
        <div in:slide out:slide class="w-full origin-bottom-right p-4 space-y-4 bg-sky-700 shadow-lg rounded-t-lg">
            <div class="flex justify-between items-center gap-16">
                <div class="text-white leading-tight">
                    <p>Hi, I'm Jerome</p>
                    <p class="text-sm">Any feedback or questions?</p>
                </div>
    
                <img class="rounded-full w-10" src="/files/jerome.jpg" alt="">
            </div>

            <form class="space-y-4" target="_blank" method="POST" action="https://docs.google.com/forms/d/e/1FAIpQLSdywOMAah_Jgs4zLtgRVLPkE0ZfXu82-LIBfWWl3jKGsiuQ6Q/formResponse">
                <textarea
                    placeholder="Start writing..."
                    name="entry.546383849"
                    required autofocus rows="4"
                    class="block font-mono bg-white w-full outline-none rounded-md p-2 resize-none"
                ></textarea>
    
                <input type="email" name="entry.256421162" class="px-3 py-2 rounded-md w-full outline-none font-mono" placeholder="Email (optional)">
    
                <button class="text-white px-4 py-3 bg-sky-600 w-full rounded-md">Submit</button>
            </form>
        </div>
    {/if}

    <button
        on:click={() => open = !open}
        class:shadow-lg={!open}
        class="
            -z-10 absolute bottom-8 right-8
            whitespace-nowrap
            rounded-lg
            px-4 py-3
            text-white bg-sky-700
            flex gap-3 items-center
        "
    >
        <i class="fas fa-message"></i>
        <span class="font-bold">Give Feedback</span>
    </button>
</div>