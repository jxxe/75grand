// https://api.raindrop.io/rest/v1/raindrops/28435309

import { RAINDROP_API_TOKEN } from '$env/static/private';
import { getCacheUrl } from '$lib/helpers.js';

export async function load(event) {
    const request = await fetch(getCacheUrl('https://api.raindrop.io/rest/v1/raindrops/28435309'), {
        headers: {
            Authorization: `Bearer ${RAINDROP_API_TOKEN}`
        }
    }).catch(console.log);

    const response = await request.json();

    return { response };
}