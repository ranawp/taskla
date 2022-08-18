// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }



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
          secondary: "#000033",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",


          // primary: "#233d4d",
          // secondary: "#00a5cf",
          // accent: "#37cdbe",
          // neutral: "#3d4451",
          // "base-100": "#ffffff",

        },
      },
      "dark",
      "cupcake",
    ],
    //....................................................
  },
  plugins: [require("daisyui")],
}