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
        "do-blue-lighter": "#f9fafe",
      },
      fontFamily: {
        sans: "'Work Sans', sans-serif",
        cascadia: "'CascadiaCode'",
      },
      boxShadow: {
        input: "0 5px 1px 0 rgb(0, 0, 0, 0.1)",
        "input-focus": "0 2px 1px 0 rgb(0, 0, 0, 0.1)",
      },
    },
    container: {
      padding: {
        DEFAULT: "1.4rem",
        "2xl": "7rem",
      },
    },
  },
  plugins: [],
};
