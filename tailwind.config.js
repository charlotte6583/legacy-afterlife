import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};