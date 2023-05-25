module.exports = {
  // purge: [],
  // purge: false, // was []
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#2f2f2f",
      secondary: "#6a6a6a",
    }),
    textColor: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
