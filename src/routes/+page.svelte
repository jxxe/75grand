<svelte:head>
	<title>75grand</title>
</svelte:head>

<script>
	import Favorites from '$lib/homepage/Favorites.svelte';
	import Links from '$lib/homepage/Links.svelte';
	import ServiceHours from '$lib/homepage/ServiceHours.svelte';

	export let data;
</script>

<main class="space-y-8 py-8">
	<Favorites links={data.links}/>

	<section class="px-8 grid gap-4 grid-cols-display">
		<ServiceHours/>
	</section>
	
	<Links links={data.links}/>
</main>