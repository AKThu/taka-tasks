/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        'my-red': '#7D0A0A',
        'my-light-red': '#BF3131',
        'my-beige': '#EAD196',
        'my-light-beige': '#F3EDC8',
        'my-dark-blue': '#161853',
        'my-blue': '#292C6D',
        'my-light-pink': '#FAEDF0',
        'my-pink': '#EC255A',
        'navy': '#141E46',
        'white-rose': '#FFF5E0',
        'light-rose': '#FF6969',
        'dark-rose': '#C70039',
        'dark-nav': '#343434',
        'dark-body': '#121212',
        'dark-holder': '#232323',
        'dark-text': '#F4ABC4',
      }
    },
  },
  plugins: [],
  darkMode: "class"
}
