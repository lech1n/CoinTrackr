/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: { 
      backgroundImage: {
      'crypto-dark': "url('./assets/cryptonews.jpg')",
      'crypto-light': "url('./assets/cryptonewsl.jpg')",
    },},
    colors: {
      /*light mode*/
      "bg-color-l":"#f3f3f3",
      "container-color-l":"#ffffff",

      /*dark mode*/
     "bg-color-d":"#11121e",
     "container-color-d":"#1d1d29",
 
     /*typography colors*/
     "white-txt":"#ffffff",
     "black-txt":"#313131",
     "grey-txt":"#7b7b7b",

     /*secondary colors*/
     "pink":"#f23f93",
     "yellow":"#fcf6bd",
     "green":"#00f5d4",
     "blue":"#03b0ad",
     "purple":"#e4c1f9",
     "deeppurple":"#b242f5",
    },
    fontFamily:{
      sans:["Inter", "sans-serif"]
    }
  },
  plugins: [],
}