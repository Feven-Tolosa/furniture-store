// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6', // Blue
          600: '#2563eb', // Darker blue
        },
      },
    },
  },
  plugins: [],
}