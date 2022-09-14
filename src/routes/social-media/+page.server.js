/** @type {import('./$types').PageLoad} */
export async function load(event) {
    // const request = await fetch('https://opensheet.elk.sh/1gv_sQRICWTmUycCE8PUe0RyVRUNZTHnGi7MSfrnJHP8/Instagram+Accounts');
    const request = await fetch(`https://75.jero.zone/cache.php?url=${encodeURIComponent('https://opensheet.elk.sh/1gv_sQRICWTmUycCE8PUe0RyVRUNZTHnGi7MSfrnJHP8/Instagram+Accounts')}`);
    const data = await request.json();

    let accounts = {};
    data.forEach(account => {
        if(!(account.category in accounts)) accounts[account.category] = [];
        accounts[account.category].push(account);
    });

    return accounts;
}