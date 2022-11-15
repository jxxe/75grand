import { parse } from 'node-html-parser';
import { getCacheUrl } from '$lib/helpers.js';

export async function load(event) {
    // const request = await fetch(`https://www.macalester.edu/directory/studentorganizations/`);
    const request = await fetch(getCacheUrl('https://www.macalester.edu/directory/studentorganizations/'));
    const html = await request.text();
    const parsed = parse(html);

    let clubs = [];

    parsed.querySelectorAll('.layout-interior__components > p').forEach(club => {
        const name = club.querySelector('b')?.innerText;
        const email = club.querySelector('a')?.innerText.toLocaleLowerCase();

        [...club.querySelectorAll('*')].forEach(child => child.remove());
        const description = club?.innerText.trim();

        clubs.push({
            name: name,
            email: email,
            description: description
        });
    });

    clubs.sort((a, b) => {
        if(a.description === '') return 1;
        if(b.description === '') return -1;
        return 0;
    });

    return { clubs: clubs };
}