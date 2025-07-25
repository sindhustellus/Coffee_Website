/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#3b141c',
        warning: '#f3961c',
        dark: '#252525',
        pink: '#faf4f5'
      },
      fontFamily:{
        'poppins': ["Poppins", "sans-serif","Meddon", "cursive"]
      }
    },
  },
  plugins: [],
}

