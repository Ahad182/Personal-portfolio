/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgColor:"#0A192F",
        PrimaryColor : "#64FFDA",
        textColor : "#8892B0"
      }
    },
  },
  plugins: [],
}