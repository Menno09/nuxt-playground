/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
        colors: {
            // Theme
            'blue': {
                100: '#1666F0',
                200: '#104093',
                300: '#193057',
                400: '#2D3537',
            },
            'white': {
                100: '#FFF',
                200: '#F4F4F4',
                300: '#F6F7F9',
                400: '#FAFCFD',
                500: '#DCE6EA',
                600: '#DCDDDF',
                700: '#BDCACF',
            },
            'gray': {
                100: '#e0e0e0',
                200: '#A9A29D',
                300: '#676767',
                400: '#FFFFFF27',
                500: '#3A414D',
                600: '#3D3D3D',
            },
            'black': {
                100: '#000',
                200: '#1D1F20',
            },
            'yellow': {
                100: '#EFE13A',
            },
            'orange': {
                100: '#F28C00',
                200: '#d97e00',
            },
            'green': {
                100: '#7AC70C',
                200: '#7F8B1F',
                300: '#5A8917',
            },

            // Accent
            'accent-blue': '#2C689C',
            'accent-pink': '#E564b5',
            'accent-green': '#7F8B1F',
            'accent-orange': '#F89F33',
            'accent-turquoise': '#46827C',
            'accent-purple': '#8E73FA',

            // Status
            'status-error': '#ea1f1f',
            'status-warning': '#ea751f',
            'status-success': '#7AC70C',

            'transparent': 'transparent',
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        extend: {
            width: {
                nav: '22rem',
            },
        },
    },

}
