/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "white",
      "white-smoke": "whitesmoke",
      black: {
        0.1: "#0000001a",
        1: "black",
      },
      yellow: {
        400: "#facc15",
      },
      red: {
        400: "#f87171",
      },
      green: {
        400: "#4ade80",
      },
      "rusty-red": "#DC3545",
      beaver: "#a18a68",
      "dark-silver": "#707070",
      "bright-gray": "#efefef",
      "light-sivler": "#D8D8D8",
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

    keyframes: ({ theme }) => ({
      "open-model": {
        from: { top: theme("spacing.-1/2") },
        to: { top: theme("spacing.1/2") },
      },
      "close-model": {
        from: {
          display: "block",
          top: theme("spacing.1/2"),
        },
        to: { top: theme("spacing.-1/2") },
      },
    }),

    animation: {
      "open-model": "open-model 0.8s",
      "close-model": "close-model 0.8s",
    },

    extend: {
      spacing: {
        "-1/2": "-50%",
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
