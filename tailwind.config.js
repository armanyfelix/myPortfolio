module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'simplex': ['simplex'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#00002a',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    }),
    extend: {
      backgroundImage: {
        'shapes': "url('/img/Untitled.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
