const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color:{
      gray:colors.gray,
      black:colors.black,
      emerald:colors.emerald,
      blue:colors.blue,
      indigo: colors.indigo,
      teal:colors.teal

    },
    screens: {
      'sm': '375px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
      
    }

  },
  variants: {
 
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
