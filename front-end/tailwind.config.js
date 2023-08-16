/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-bg": "#ffffff",
        "color-text-black": "#000",
        "color-text-white": "#fff",
        "color-light": "#a18a68",
        "color-footer": "#707070",
        "color-gray": "#d8d8d8",
        "color-light-gray": "#efefef",
        "color-errors": "#d82700",
      },
      fontFamily: {
        sans: ["DM sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
