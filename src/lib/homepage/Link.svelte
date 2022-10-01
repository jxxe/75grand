<script>
    import { favorites } from '../stores.js';
    export let link;

    const toggleFavorite = linkId => {
        if($favorites.includes(linkId)) {
            favorites.update(values => {
                const index = values.indexOf(linkId);
                if(index > -1) values.splice(index, 1);
                return values;
            });
        } else {
            favorites.update(v => [...v, linkId]);
        }
    };
</script>

<a target={link.url.startsWith('/') ? null : '_blank'} class="group bg-white hover:bg-gray-50 transition-colors px-4 py-3 rounded-lg border border-gray-200 flex gap-3 items-center" href={link.url}>
    <i class="fas fa-{link.icon}"></i>
    <span class="w-full text-ellipsis overflow-hidden whitespace-nowrap font-semibold">{link.name}</span>
    <i
        on:click|preventDefault={toggleFavorite(link.id)}
        class:!text-yellow-500={$favorites.includes(link.id)}
        class="text-gray-300 lg:opacity-0 transition-opacity lg:group-hover:opacity-100 fas fa-star"
    ></i>
</a>