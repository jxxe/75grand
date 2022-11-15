import { getCacheUrl } from '$lib/helpers.js';

export async function load(event) {
    // Fetch both endpoints in parallel
    const [linkData, factData] = await Promise.all([
        fetch(getCacheUrl('https://opensheet.elk.sh/1gv_sQRICWTmUycCE8PUe0RyVRUNZTHnGi7MSfrnJHP8/Links')).then(r => r.json()),
        fetch(getCacheUrl('https://opensheet.elk.sh/1gv_sQRICWTmUycCE8PUe0RyVRUNZTHnGi7MSfrnJHP8/Facts')).then(r => r.json())
    ]);

    let links = {};
    linkData.forEach(link => {
        if(!(link.category in links)) links[link.category] = [];
        links[link.category].push(link);
    });

    // Select fact based on modulus of current day
    let fact = factData[Math.round(Date.now() / (1000*60*60*24)) % factData.length];

    return { links, fact };
}