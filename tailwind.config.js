/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      height: {
        100: '34rem',
        112: '64rem',
      },
      backgroundImage: {
        'footer-bg': "url('/img/eduard-delputte-VrwZXLs_2_U-unsplash.jpg')",
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
