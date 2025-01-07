/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'peach': '#FFBE86',
      'red': '#8C4843',
      'light-red': '#B66D68',
      'blue': '#068D9D',
      'light-blue': '#07B2C5',
      'gunmetal': '#062E38',
      'seashell': '#FFF4EB',
    },
  },
  plugins: [],
}