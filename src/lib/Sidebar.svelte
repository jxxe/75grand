<script>
    import { page, navigating } from '$app/stores';
    import Spinner from './Spinner.svelte';
    import { beforeNavigate } from '$app/navigation';

    let menuOpen = false;
    beforeNavigate(() => menuOpen = false);

    const pages = {
        '/': 'Links',
        '/calendar': 'Calendar',
        '/guides': 'Guides',
        // '/clubs': 'Clubs',
        // '/directory': 'Directory',
        '/social-media': 'Social Media'
    };
</script>

<div class="z-40 lg:grid grid-rows-[1fr,max-content] gap-4 bg-white lg:max-w-[350px] sticky top-0 lg:h-screen w-full border-b lg:border-b-0 lg:border-r border-gray-200 lg:p-8 py-4 px-8">
    <div class="space-y-6">
        <div class="flex lg:block justify-between items-center">
            <div>
                <strike class="text-red-500 text-xl">1600grand</strike>
                <h1 class="peer inline text-3xl text-sky-700 font-bold font-serif cursor-pointer"><a href="/">75grand</a></h1>
                <img class="fixed w-44 right-[10vw] bottom-0 transition-transform peer-hover:duration-1000 translate-y-[100%] lg:peer-hover:translate-y-0" src="/files/scottie.png" alt="A scottie dog">
                <!-- <p class="text-gray-500 leading-5 hidden lg:block truncate">your portal to Macalester College</p> -->
                <p class="text-gray-500 leading-5 hidden lg:block truncate">your unofficial portal to Macalester</p>
            </div>
    
            <button on:click={() => menuOpen = !menuOpen} class="lg:hidden active:scale-90 transition-transform">
                <i class="fas fa-{menuOpen ? 'xmark' : 'bars'} text-2xl p-[16px] m-[-16px]"></i>
            </button>
        </div>
    
        <div class:!block={menuOpen} class="space-y-6 hidden lg:block">
            <!-- <div class="transition-shadow focus-within:shadow-lg bg-gray-50 overflow-hidden border border-gray-200 rounded-lg flex items-center pl-4">
                <i class="text-gray-400 fas fa-search"></i>
                <input autofocus class="placeholder:text-gray-400 bg-transparent outline-none py-3 pl-3 pr-4 w-full" placeholder="Search for links..." type="text">
            </div> -->

            <div class="hidden lg:flex p-2 bg-gray-100 rounded-lg border gap-3 items-center">
                <img class="w-14 h-14 rounded-[25%] border" src="/files/pwa/icon.png" alt="">
        
                <div>
                    <h3 class="text font-bold">Get the app</h3>
                    <p class="text-gray-400 text-sm leading-4">Open 75grand on your phone and follow the directions</p>
                </div>
            </div>
        
            <nav class="space-y-2">
                {#each Object.entries(pages) as [href, name]}
                    <a
                        href={href}
                        class="flex items-center gap-4 justify-between w-full py-2 px-3 hover:bg-gray-100 font-semibold transition-colors rounded-lg"
                        class:bg-gray-100={$page.url.pathname === href}
                    >
                        <span>{name}</span>
                        {#if $navigating?.to.url.pathname === href}
                            <div class="w-5 h-5 opacity-30">
                                <Spinner color="currentColor"/>
                            </div>
                        {/if}
                    </a>
                {/each}
            </nav>
        </div>
    </div>

    <div class="hidden lg:block">
        <p class="text-gray-400 text-sm">Coded & Curated by <a class="text-sky-700 font-bold" href="https://jero.zone">Jerome Paulos</a></p>
    </div>
</div>