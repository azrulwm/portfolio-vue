module.exports = {
  content: [
    "./src/**/*.vue",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.html",
    "./src/**/*.md",
  ],

  theme: {
    extend: {
      colors: {
        "primary-light": "#FFCAB1",
        "secondary-light": "#9ED0E6",
        "ternary-light": "#7EB9E5",
        "primary-highlight": "#F96900",

        "primary-dark": "#0D2438",
        "secondary-dark": "#113656",
        "ternary-dark": "#1E3851",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
  },

  variants: {
    extend: {
      opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
