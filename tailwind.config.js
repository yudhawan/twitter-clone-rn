/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./Navigation/**/*.{js,jsx,ts,tsx}","./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        mainBlue:"#4c9eeb",
        mainBlack:"#141619",
        mainGrey:"#687684",
        mainGreen:"#59BC6C",
        mainRed:"#CE395F"
      }
    },
  },
  plugins: [],
}
