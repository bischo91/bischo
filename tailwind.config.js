module.exports = {
  purge: false, //wsa [] before
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
    extend: {
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
        LobsterTwo: ["Lobster Two", "cursive"],
        BebasNeue: ["Bebas Neue", "cursive"],
        BalsamiqSans: ["Balsamiq Sans", "cursive"],
        OpenSansCondensed: ["Open Sans Condensed", "sans-serif"],
      },
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
