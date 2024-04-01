/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color:{
        dark: 'var(--dark-color)' ,
        light: 'var(--light-color)' ,
      }
    },
  },
  plugins: [],
}

