const defaultTheme = require('tailwindcss/defaultTheme')
const bootstrap =  require('tailwind-bootstrap-grid')({
    containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1300px' },
})

module.exports = {
  theme: {
    extend: {
        fontFamily: {
            heading: ['Poppins', 'sans-serif'],
            body: ['Roboto', 'sans-serif']
        },
        colors: {
            primary: '#ff006e',
            secondary: '#6247AA',
            light: '#E2CFEA'
        } 
    }
  },
  plugins: [
        bootstrap
    ]
}