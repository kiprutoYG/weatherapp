/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'], // Adding Lucida Sans as default font
      },
      keyframes: {
        bounceIn: {
          "0%, 100%": { transform: "scale(0.95)", opacity: "0.8" },
          "50%": { transform: "scale(1)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleUp: {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        bounceIn: "bounceIn 0.8s ease-out",
        fadeIn: "fadeIn 1s ease-out",
        slideIn: "slideIn 1s ease-out",
        zoomIn: "zoomIn 1s ease-out",
        scaleUp: 'scaleUp 0.6s ease-out',
      },
      backgroundImage: {
        'clouds': "url('/public/clouds.jpg')",
      }
    },

    colors: {
      'main' : '#c2a599',
      'secondary' : '#4e4351',
      'accent' : '#b4a7b7',
      'try': '#cfceeb',
    },
  },
  plugins: [],
};
