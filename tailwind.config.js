module.exports = {
  purge: [],
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
