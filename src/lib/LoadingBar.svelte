<script>
    import { beforeNavigate, afterNavigate } from '$app/navigation';

    let progress = 0;
    let opacity = 1;
    let interval;

    beforeNavigate(({ from, to, willUnload }) => {
        if(from === null || to === null || willUnload) return;
        opacity = 1;
        progress = 20;
        interval = setInterval(() => progress += (100 - progress) / 5, 500);
    });

    afterNavigate(({ from, to }) => {
        if(from === null || to === null) return;
        clearInterval(interval);
        
        progress = 100;

        setTimeout(() => opacity = 0, 600);
        setTimeout(() => progress = 0, 900);
    });
</script>

<div
    style="width:{progress}%; opacity:{opacity}"
    class="transition-[opacity,width] duration-300 bg-sky-700 h-[2.5px] fixed z-50"
></div>