<script>
    import { page, navigating } from '$app/stores';
    import Spinner from './Spinner.svelte';
    import { beforeNavigate } from '$app/navigation';

    let menuOpen = false;
    beforeNavigate(() => menuOpen = false);

    const pages = {
        '/': 'Links',
        '/calendar': 'Calendar',
        '/directory': 'Directory',
        '/map': 'Campus Map',
        '/clubs': 'Student Groups',
        '/social-media': 'Social Media',
        '/guides': 'Guides'
    };
</script>

<div class="bg-white lg:max-w-[350px] sticky top-0 lg:h-screen space-y-6 w-full border-b lg:border-b-0 lg:border-r border-slate-200 lg:p-8 py-4 px-8">
    <div class="flex lg:block justify-between items-center">
        <div>
            <strike class="text-red-500 text-xl">1600grand</strike>
            <h1 class="peer inline text-3xl text-sky-700 font-bold font-serif cursor-pointer"><a href="/">75grand</a></h1>
            <img class="fixed w-44 right-[10vw] bottom-0 transition-transform peer-hover:duration-1000 translate-y-[100%] lg:peer-hover:translate-y-0" src="/images/scottie.png" alt="A scottie dog">
            <p class="text-slate-500 leading-5 hidden lg:block">the unofficial student portal, by and for the students of Macalester College</p>
        </div>

        <button on:click={() => { menuOpen = !menuOpen }} class="lg:hidden active:scale-90 transition-transform">
            <i class="fas fa-{menuOpen ? 'xmark' : 'bars'} text-2xl p-[16px] m-[-16px]"></i>
        </button>
    </div>

    <div class:!block={menuOpen} class="space-y-6 hidden lg:block">
        <div class="transition-shadow focus-within:shadow-lg bg-slate-50 overflow-hidden border border-slate-200 rounded-lg flex items-center pl-4">
            <i class="text-slate-400 fas fa-search"></i>
            <input autofocus class="placeholder:text-slate-400 bg-transparent outline-none py-3 pl-3 pr-4 w-full" placeholder="Search for links, events..." type="text">
        </div>
    
        <nav class="space-y-2">
            {#each Object.entries(pages) as [href, name]}
                <a
                    href={href}
                    class="flex items-center gap-4 justify-between w-full py-2 px-3 hover:bg-slate-100 font-semibold transition-colors rounded-lg"
                    class:bg-slate-100={$page.url.pathname === href}
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