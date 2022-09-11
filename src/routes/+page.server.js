export async function load(event) {
    const request = await fetch('https://opensheet.elk.sh/1gv_sQRICWTmUycCE8PUe0RyVRUNZTHnGi7MSfrnJHP8/Links');
    const data = await request.json();

    let links = {};
    data.forEach(link => {
        if(!(link.category in links)) links[link.category] = [];
        links[link.category].push(link);
    });

    return { links: links };
}