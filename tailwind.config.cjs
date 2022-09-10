/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            borderWidth: { DEFAULT: '1.5px' },
            gridTemplateColumns: {
                display: 'repeat(auto-fill, minmax(250px, 1fr))'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')({ strategy: 'class' })
    ]
}
