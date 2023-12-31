/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'primary': '#B84139',
                'white': '#FEFEFE'

            },
            animation: {
                fade: 'fadeIn 1s ease-in-out'
            },
            keyframes: {
                fadeIn: {
                    '0%': {tranform: 'translateY(-50%)'},
                    '100%': {transform: 'translateY(0)'}
                }
            }
        },
    },
    plugins: [],
}
//teaching hospital
//first-1,4,6
//second-2ta