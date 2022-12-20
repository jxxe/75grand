import { getCacheUrl } from '$lib/helpers.js';

/** @type {import('./$types').PageLoad} */
export async function load(event) {
    // const request = await fetch('https://opensheet.elk.sh/1Ey3sHd-DLO2VjoGJZmbbApb0ZlUxqDiyu7Uy2NZLx84/Contacts');
    const request = await fetch(getCacheUrl('https://opensheet.elk.sh/1Ey3sHd-DLO2VjoGJZmbbApb0ZlUxqDiyu7Uy2NZLx84/Contacts'));
    const contacts = await request.json();
    return {
        featured: contacts.filter(contact => contact.featured !== ''),
        contacts: contacts.filter(contact => contact.featured === '')
    }
}