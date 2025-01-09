/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'clouds': "url('/public/clouds.jpg')",
      }
    },

    colors: {
      'main' : '#4e4351',
      'secondary' : '#d9e8ee',
      'accent' : '#b4a7b7',
      'try': '#cfceeb',
    },
  },
  plugins: [],
};
