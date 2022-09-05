<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status} — 75grand</title>
</svelte:head>

<main class="p-8">
    <h1 class="text-5xl">{$page.status} Error</h1>
</main>