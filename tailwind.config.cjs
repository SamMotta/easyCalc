/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/*.tsx",
    "./src/components/*.tsx",
    "./src/pages/*.tsx",
    "./src/pages/*/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "cupcake",
      "night",
    ],
    darkTheme: false,
  },
}
