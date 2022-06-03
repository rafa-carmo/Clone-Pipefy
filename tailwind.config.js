const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brand: {
          300: '#ecf1f8'
        },
        border: {
          400: "rgba(230, 236, 245, 0.4)"
        }
      }
    }
  },
  plugins: []
}
