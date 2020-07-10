const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: false,
  theme: {
    extend: {
      colors: {
        primary: '#428DFC',
        primaryDark: '#3279e5',
        info: '#30A8E6',
        success: '#A1C920',
        danger: '#FC5842',
        dark: '#343A40',
        secondary: '#6C757D',
        black: '#000',
        white: '#fff',
        body: '#3C4859',
        background: '#F8F9FA',
        transparent: 'transparent'
      },
      container: {
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      fontFamily: {
        'body': ['Inter']
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        'primary': '0 10px 15px -3px rgba(48, 168, 230, .3)'
      },
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' }
      }
    },
  },
  variants: {},
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
  ],
}