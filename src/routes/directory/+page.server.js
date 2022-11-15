import { getCacheUrl } from '$lib/helpers.js';

/** @type {import('./$types').PageLoad} */
export async function load(event) {
    // const request = await fetch('https://opensheet.elk.sh/1gv_sQRICWTmUycCE8PUe0RyVRUNZTHnGi7MSfrnJHP8/Contacts');
    const request = await fetch(getCacheUrl('https://opensheet.elk.sh/1gv_sQRICWTmUycCE8PUe0RyVRUNZTHnGi7MSfrnJHP8/Contacts'));
    const contacts = await request.json();
    return {
        featured: contacts.filter(contact => contact.featured !== ''),
        contacts: contacts.filter(contact => contact.featured === '')
    }
}