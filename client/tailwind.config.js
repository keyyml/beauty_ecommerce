/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ['./src/components/App.js', './src/components/NavBar.js'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
// module.exports = {
//   content: [
//     './src/components/App.js'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

