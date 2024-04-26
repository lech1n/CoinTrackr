/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
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
     "pink":"#ff99c9",
     "yellow":"#fcf6bd",
     "green":"#d0f4de",
     "blue":"#a3def9",
     "purple":"#e4c1f9",
     "deeppurple":"#b242f5",
    },

    fontFamily:{
      sans:["Inter", "sans-serif"]
    }
  },
  plugins: [],
}