export async function load(event) {
    const files = import.meta.glob('./*.md');
    return await Promise.all(
        Object.entries(files).map(async ([path, resolver]) => {
            const { metadata } = await resolver();

            return {
                meta: metadata,
                slug: path.slice(2, -3), // ./slug.md -> slug
            };
        })
    );
}