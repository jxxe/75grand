<svelte:head>
	<title>Directory — 75grand</title>
</svelte:head>

<script>
	import Contact from './Contact.svelte';
	export let data;
</script>

<main class="p-8 space-y-8">
	<div class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
		{#each data.featured as contact}
			<Contact
				name={contact.name}
				phone={contact.phone}
				email={contact.email}
				website={contact.website}
				location={contact.location}
			/>
		{/each}
	</div>

	<hr>

	<div class="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
		{#each data.contacts as contact}
			<Contact
				name={contact.name}
				phone={contact.phone}
				email={contact.email}
				website={contact.website}
				location={contact.location}
			/>
		{/each}
	</div>
</main>