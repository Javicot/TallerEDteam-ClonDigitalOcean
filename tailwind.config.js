/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "do-blue-dark": "rgb(8, 12, 45)",
        "do-blue-mediumDark": "rgb(29, 39, 76)",
        "do-blue-light": "rgb(20, 86, 255)",
        "do-blue-medium": "rgb(0, 105, 255)",
      },
      fontFamily: {
        sans: "'Work Sans', sans-serif",
        cascadia: "'CascadiaCode'",
      },
    },
    container: {
      padding: "1.4rem",
    },
  },
  plugins: [],
};
