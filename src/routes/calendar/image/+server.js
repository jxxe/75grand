import { error, redirect } from '@sveltejs/kit';;

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
    let imageUrl = 'https://www.macalester.edu/academics/wp-content/uploads/sites/275/2020/08/academics-hero-old-main2-960x0-c-default.jpg';

    const eventUrl = url.searchParams.get('url') ?? false;
    if(eventUrl === false) throw error(400, '`url` is required');

    const scrapeUrl = `https://web.scraper.workers.dev/?url=${encodeURIComponent(eventUrl)}&selector=img.context-image__image&scrape=attr&attr=src`;
    const request = await fetch(scrapeUrl);
    let scrapedImageUrl = await request.json();
    scrapedImageUrl = scrapedImageUrl.result || false;

    if(scrapedImageUrl !== false) imageUrl = scrapedImageUrl;
    imageUrl = `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl)}&w=200&h=200&fit=cover`;
    throw redirect(301, imageUrl);
}