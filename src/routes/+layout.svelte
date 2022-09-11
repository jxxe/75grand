<script>
	import '../app.css';
	import LoadingBar from '$lib/LoadingBar.svelte';
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<LoadingBar/>

<div class="grid lg:grid-cols-[350px,1fr] grid-rows-[max-content,1fr] lg:grid-rows-none min-h-screen">
	<Sidebar/>

	<div class="w-full bg-slate-100">
		<slot/>
	</div>
</div>