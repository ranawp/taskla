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
// primary: "#1E266D",
// secondary: "#C11A7E",
// accent: "#37cdbe",
// neutral: "#3d4451",
// "base-100": "#ffffff",