const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    future: {
        hoverOnlyWhenSupported: true
    },
    theme: {
        extend: {
            gridTemplateColumns: {
                display: 'repeat(auto-fill, minmax(250px, 1fr))'
            },
            fontFamily: {
                serif: 'Georgia, ui-serif, Cambria, "Times New Roman", Times, serif'
            },
            keyframes: {
                pingNoScale: {
                    '75%, 100%': { opacity: 0 }
                }
            },
            animation: {
                pingNoScale: 'pingNoScale 750ms cubic-bezier(0, 0, 0.2, 1) infinite;'
            },
            screens: {
                standalone: { raw: '(display-mode: standalone)' }
            },
            colors: {
                gray: colors.slate
            },
            borderColor: {
                DEFAULT: colors.slate[200]
            },
            borderWidth: {
                DEFAULT: '1.5px'
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')({ strategy: 'class' })
    ]
}