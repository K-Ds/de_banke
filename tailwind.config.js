/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C8EE44',
        secondary: '#29A073',
        theading: '#1B212D',
        tnormal: '#78778B',
        tlight: '#929EAE',
      },
      backgroundImage: {
        hero_pattern: "url('./src/assets/subtle-prism.svg')",
      },
    },
  },
  plugins: [],
};
