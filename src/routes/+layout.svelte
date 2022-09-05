<script>
	import '../app.css';
	import Sidebar from '../lib/Sidebar.svelte';
</script>

<div class="xl:flex">
	<Sidebar/>

	<div class="w-full bg-slate-100">
		<slot/>
	</div>
</div>