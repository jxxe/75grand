/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const cache = caches.default;
    const cachedResponse = await cache.match(event.request, {
        ignoreSearch: true,
        ignoreMethod: true
    });
    if(cachedResponse) return cachedResponse;

    const response = await resolve(event);
    await cache.put(event.request, response);
    return response
}