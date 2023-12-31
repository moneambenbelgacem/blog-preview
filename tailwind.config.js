/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        yellow: 'hsl(47, 88%, 63%)',
        white: 'hsl(0, 0%, 100%)', 
        grey: 'hsl(0, 0%, 50%)',
        black: 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        sans: ['Figtree', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '10px 10px 0px  hsl(0, 0%, 7%)',
      }
    },
  },
  plugins: [],
}

