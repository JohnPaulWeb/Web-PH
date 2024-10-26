/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'working-img' : "url('/national.png')"
      },
      fontFamily: {
        'primary' : ["Edu VIC WA NT Beginner", "cursive"],
        'secondary' : ["Grey Qo", "cursive"]
      },
      colors: {
        'heroBg' : '#0e1122',
        'para' : 'rgb(0 0 0 / 80%)',
        'primary' : '#06a055'
      }
    },
  },
  plugins: [],
}