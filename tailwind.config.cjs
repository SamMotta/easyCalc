/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "**\/*.tsx",
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
