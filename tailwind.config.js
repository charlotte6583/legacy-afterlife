import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cambria: ['Cambria', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};