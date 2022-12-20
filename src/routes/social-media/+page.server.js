import { getCacheUrl } from '$lib/helpers.js';

/** @type {import('./$types').PageLoad} */
export async function load(event) {
    // const request = await fetch('https://opensheet.elk.sh/1Ey3sHd-DLO2VjoGJZmbbApb0ZlUxqDiyu7Uy2NZLx84/Instagram+Accounts');
    const request = await fetch(getCacheUrl('https://opensheet.elk.sh/1Ey3sHd-DLO2VjoGJZmbbApb0ZlUxqDiyu7Uy2NZLx84/Instagram+Accounts'));
    const data = await request.json();

    let accounts = {};
    data.forEach(account => {
        if(!(account.category in accounts)) accounts[account.category] = [];
        accounts[account.category].push(account);
    });

    return accounts;
}