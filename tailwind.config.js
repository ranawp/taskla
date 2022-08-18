


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  //.....................................................
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#00a5cf",
          secondary: "#036363",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",


        },
      },
    ],
    //....................................................
  },
  plugins: [require("daisyui")],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }
