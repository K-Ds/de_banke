/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    colors: {
      primary: '#C8EE44',
      secondary: '#29A073',
      theading: '#1B212D',
      tnormal: '#78778B',
      tlight: '#929EAE',
      white: colors.white,
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [],
};

