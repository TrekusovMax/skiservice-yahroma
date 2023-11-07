/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}', './node_modules/flowbite/**/*.js'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Times New Roman'],
      roboto: ['Roboto', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
