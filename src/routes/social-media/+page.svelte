<svelte:head>
    <title>Instagram Accounts — 75grand</title>
</svelte:head>

<script>
    export let data;
</script>

<main class="p-8 space-y-8">
    {#each Object.entries(data) as [category, accounts]}
        <section>
            <h2 class="text-lg font-bold mb-4">{category}</h2>

            <div class="grid grid-cols-display gap-4">
                {#each accounts as account}
                    <a class="flex gap-4 items-center space-y-1 bg-white hover:bg-slate-50 transition-colors px-4 py-3 rounded-lg border border-slate-200" href="https://instagram.com/{account.username}" target="_blank">
                        <img class="w-16 rounded-full" src="/files/instagram/{account.username}.jpg" alt="{account.username}'s profile picture">
                        <div>
                            <h3 class="leading-5 font-semibold">{account.name}</h3>
                            <p>@{account.username}</p>
                        </div>
                    </a>
                {/each}
            </div>
        </section>
    {/each}
</main>