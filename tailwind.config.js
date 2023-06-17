/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['sans-serif', 'Roboto']
      },
      colors: {
        'very-dark-gray': '#16181d',
        'dark-gray': '#1e2326',
        'gray': '#292f32',
        'very-light-gray': '#f4f7fa',
        'light-gray': '#fffefe',
        'white': '#fffefe',

      }
    },
  },
  plugins: [],
}

