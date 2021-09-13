module.exports = {
    purge: [
        './*.html',
        './**/*.html',
        './**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#F15273',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
