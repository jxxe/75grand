<svelte:head>
    <title>Student Groups — 75grand</title>
</svelte:head>

<script>
    import { browser } from '$app/environment';
    export let data;

    let clubs = [];

    if(browser) {
        const parser = new DOMParser();
        const page = parser.parseFromString(data.html, 'text/html');

        page.querySelectorAll('.layout-interior__components > p').forEach(club => {
            const name = club.querySelector('b')?.innerText;
            const email = club.querySelector('a')?.innerText.toLocaleLowerCase();

            [...club.children].forEach(child => child.remove());
            const description = club?.innerText.trim();

            clubs.push({
                name: name,
                email: email,
                description: description
            });
        });

        clubs.sort((a, b) => {
            if(a.description === '') return 1;
            if(b.description === '') return -1;
            return 0;
        });
    }
</script>

<main class="p-8 space-y-4">
    {#if clubs.length}
        {#each clubs as club}
            <div class="grid grid-cols-[1fr,2fr] gap-4 bg-white px-4 py-3 rounded-lg border border-slate-200">
                <div class="space-y-1">
                    <h3 class="leading-5 font-semibold">{club.name}</h3>
                
                    {#if club.email}
                        <a class="w-fit max-w-full hover:text-sky-700 transition-colors flex gap-2 items-center" href="mailto:{club.email}">
                            <i class="fas text-sm fa-envelope"></i>
                            <span>{club.email}</span>
                        </a>
                    {/if}
                </div>

                <p>{club.description}</p>
            </div>
        {/each}
    {/if}
</main>