const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {    
      typography: (theme) => ({
        DEFAULT: { 
          css: {
            h1: {
              color: theme('colors.blue.500'),
            },
            h2: {
              color: theme('colors.blue.500'),
            },
            h3: {
              color: theme('colors.blue.500'),
            },
          }
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
