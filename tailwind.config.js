/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      height: {
        100: '34rem',
        112: '64rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    fontFamily: {
      primary: ['Josefin Sans'],
      secondary: ['Jost'],
    },
    extend: {},
  },
  plugins: [],
};
