/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f5f0e6', // Cream (background)
          500: '#d4a373', // Warm brown (buttons)
          700: '#a98467', // Darker brown (hover)
          900: '#6c584c', // Dark wood tone
        },
        accent: {
          500: '#adc178', // Sage green (accent)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}
