/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
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
      fontSize: {
        12: "var(--size-12)",
        14: "var(--size-14)",
        16: "var(--size-16)",
        20: "var(--size-20)",
        26: "var(--size-26)",
        33: "var(--size-33)",
      },
      fontWeight: {
        400: "var(--font-weight-400)",
        500: "var(--font-weight-500)",
        600: "var(--font-weight-600)",
        700: "var(--font-weight-700)",
        900: "var(--font-weight-900)",
      },
      lineHeight: {
        20: "var(--line-height-20)",
        26: "var(--line-height-26)",
        27: "var(--line-height-27)",
        35: "var(--line-height-35)",
      },
    },
  },
  plugins: [],
};
