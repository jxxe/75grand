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

	<section class="px-8 pt-8 leading-none text-slate-400 border-t flex justify-between gap-4">
		<p>Inspired by <a class="text-sky-700 font-semibold" href="https://husker.vercel.app/" target="_blank">Husker</a> for Northeastern University</p>
		<p>&copy; {new Date().getFullYear()}</p>
	</section>
</main>