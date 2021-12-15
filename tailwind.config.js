module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#d9f0f2',
      'secondary': '#eaf6fb',
        }
    ),
    textColor: {
      'primary': '#2286aa',
      'secondary': '#15546a',
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
