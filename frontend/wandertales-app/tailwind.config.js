/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:["poppins","sans-serif"],
    },
    extend: {
      //colors used in the project
      color:{
        primary:"#05B6D3",
        secondary:"#EF863E",
      },
    },
  },
  plugins: [],
}

