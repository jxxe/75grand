<script>
    export let fact;
</script>

<a href="{fact.link}" target="_blank" class="overflow-hidden relative bg-black text-white rounded-lg">
    <div class="flex flex-col z-10 relative justify-between p-4 h-full shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.25)] rounded-lg">
        <p class="font-serif italic text-lg">Did you know?</p>
        <p class="mt-4 text-xl font-serif leading-tight">{fact.message}</p>
        <p class="hidden sm:block absolute right-4 uppercase text-[0.65rem] opacity-75" style="writing-mode:vertical-rl">{fact.image_credit}</p>
    </div>

    <img class="absolute top-0 left-0 w-full h-full object-cover opacity-40" src="https://images.weserv.nl?url={encodeURIComponent(fact.image)}&w=400&h=400&fit=cover&we&trim&output=webp" alt="">
</a>