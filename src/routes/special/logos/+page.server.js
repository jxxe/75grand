// https://api.raindrop.io/rest/v1/raindrops/28435309

import { RAINDROP_API_TOKEN } from '$env/static/private';
import { getCacheUrl } from '$lib/helpers.js';

export async function load(event) {
    const request = await fetch('https://api.raindrop.io/rest/v1/raindrops/28435309', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${RAINDROP_API_TOKEN}`
        }
    }).catch(console.error);

    const response = await request.json();

    return { response };
}