import { parse } from 'node-html-parser';

export async function load(event) {
    const request = await fetch('https://www.wmcn.fm/?page_id=353');
    const html = await request.text();
    const parsed = parse(html);

    return {
        title: parsed.querySelector('.nowplaying .show-title a')?.textContent,
        time: parsed.querySelector('.nowplaying .show-time')?.textContent
    }
}