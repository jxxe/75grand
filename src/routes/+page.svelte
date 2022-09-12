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

		<a href="https://forms.gle/WBWJxb7ucaW7QjwU6" target="_blank" class="p-8 flex flex-col items-center justify-center border-2 border-dashed hover:border-solid border-slate-300 rounded-lg">
			<i class="text-2xl fas fa-paint-roller"></i>
			<span class="text-lg font-semibold">Suggest a Widget</span>
			<span class="text-slate-400">What should go here?</span>
		</a>

		<div class="grid gap-4 grid-rows-2">
			<a href="https://devgarden.macalester.edu/projects/75" target="_blank" class="p-8 flex flex-col items-center justify-center border-2 border-dashed hover:border-solid border-slate-300 rounded-lg">
				<i class="text-2xl fas fa-code"></i>
				<span class="text-lg font-semibold">Contribute Code</span>
				<span class="text-slate-400">I'm failing CS123</span>
			</a>

			<div class="p-8 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 rounded-lg">
				<i class="text-2xl fas fa-bullhorn"></i>
				<span class="text-lg font-semibold">Spread the Word</span>
				<span class="text-slate-400">Put up posters, tell your friends</span>
			</div>
		</div>
	</section>
	
	<Links links={data.links}/>

	<section class="px-8 pt-8 text-slate-400 border-t lg:flex justify-between gap-4">
		<p>Inspired by <a class="text-sky-700 font-semibold" href="https://husker.vercel.app/" target="_blank">Husker</a> for Northeastern University</p>
		<p>Not affiliated with Macalester College</p>
	</section>
</main>