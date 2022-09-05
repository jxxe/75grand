/** @type {import('./$types').PageLoad} */
export async function load(event) {
    const request = await fetch('https://www.macalester.edu/directory/studentorganizations/');
    return { html: await request.text() };
}