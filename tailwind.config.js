module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
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
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        openSans: ["Open Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
