<svelte:head>
	<title>75grand</title>
</svelte:head>

<script>
	import Favorites from '$lib/homepage/Favorites.svelte';
	import Links from '$lib/homepage/Links.svelte';
	import ServiceHours from '$lib/homepage/ServiceHours.svelte';
    import DidYouKnow from '$lib/homepage/DidYouKnow.svelte';

	export let data;
</script>

<main class="py-8 space-y-8">
	<Favorites links={data.links}/>

	<section class="px-8 grid gap-4 grid-cols-display">
		<ServiceHours/>

		<DidYouKnow fact={data.fact}/>

		<div class="grid gap-4 grid-rows-2">
			<a href="https://devgarden.macalester.edu/projects/75" target="_blank" class="p-8 flex flex-col items-center justify-center border-2 border-dashed hover:border-solid border-gray-300 rounded-lg">
				<i class="text-2xl fas fa-code"></i>
				<span class="text-lg font-semibold">Contribute Code</span>
				<span class="text-gray-400">I'm failing CS123</span>
			</a>

			<a href="https://drive.google.com/file/d/1tP1YV5I-AE3QhyfzOPW2p6I_CE2VflaA/view" target="_blank" class="p-8 flex flex-col items-center justify-center border-2 border-dashed hover:border-solid border-gray-300 rounded-lg">
				<i class="text-2xl fas fa-bullhorn"></i>
				<span class="text-lg font-semibold">Spread the Word</span>
				<span class="text-gray-400">Put up posters, tell your friends</span>
			</a>
		</div>
	</section>
	
	<Links links={data.links}/>

	<section class="px-8 pt-8 text-gray-400 border-t lg:flex justify-between gap-4">
		<p>Inspired by <a class="text-sky-700 font-semibold" href="https://husker.vercel.app/" target="_blank">Husker</a> for Northeastern University</p>
		<p>Not affiliated with Macalester College</p>
	</section>
</main>