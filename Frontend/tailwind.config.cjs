/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors:{
        dark: "#343434"
      },
      screens: {
        "xs": "620px",
      },
      spacing: {
        "4.5": "1.125rem",
      }
    },
  },
  plugins: [],
}
