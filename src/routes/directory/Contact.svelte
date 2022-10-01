<script>
    export let name, phone, email, website, location;
</script>

<div class="space-y-1 bg-white px-4 py-3 rounded-lg border border-gray-200">
    <h3 class="font-semibold">{name}</h3>

    {#if phone}
        <a class="w-fit max-w-full hover:text-sky-700 transition-colors flex gap-2 items-center" href="tel:{phone.replaceAll('-', '')}">
            <i class="fas text-sm fa-phone"></i>
            <span>{phone}</span>
        </a>
    {/if}

    {#if email}
        <a class="w-fit max-w-full hover:text-sky-700 transition-colors flex gap-2 items-center" href="mailto:{email}">
            <i class="fas text-sm fa-envelope"></i>
            <span>{email}</span>
        </a>
    {/if}

    {#if website}
        <a class="w-fit max-w-full hover:text-sky-700 transition-colors flex gap-2 items-center" target="_blank" href={website}>
            <i class="fas text-sm fa-globe"></i>
            <span class="whitespace-nowrap overflow-hidden text-ellipsis">{website.replace('https://', '').replace('www.', '')}</span>
        </a>
    {/if}

    {#if location}
        <div class="w-fit max-w-full flex gap-2 items-center">
            <i class="fas text-sm fa-building"></i>
            <span>{location}</span>
        </div>
    {/if}
</div>