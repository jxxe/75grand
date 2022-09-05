export async function load({ params }) {
    const post = await import(`../${params.slug}.md`)
    const { title, date, updated, image, author } = post.metadata
    const content = post.default

    return {
        content,
        title,
        image,
        date,
        updated,
        author
    }
}