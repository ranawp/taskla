module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        primary: "#1E266D",
        secondary: "#C11A7E",
      }
    },
  },
  plugins: [require("daisyui")],
}


// dark color code 
// card color: #182233
// border color: #293241