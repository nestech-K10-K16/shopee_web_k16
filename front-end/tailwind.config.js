/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: {
        0.1: "#0000001a",
        1: "black",
      },
      white: "white",
      beaver: "#a18a68",
      dark_silver: "#707070",
      bright_gray: "#efefef",
      light_sivler: "#D8D8D8",
    },

    fontFamily: {
      base: "DM Sans, sans-serif",
    },

    fontWeight: {
      400: 400,
      500: 500,
      600: 600,
      700: 700, 
      900: 900,
    },

    fontSize: {
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      26: "1.625rem",
      33: "2.0625rem",
    },

    lineHeight: {
      20: "1.25rem",
      26: "1.625rem",
      27: "1.6875rem",
      35: "2.1875rem",
    },

    extend: {},
  },
  plugins: [],
};
