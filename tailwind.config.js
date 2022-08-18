module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  //.....................................................
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1E266D",
          secondary: "#C11A7E",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
    //....................................................
  },
  plugins: [require("daisyui")],
}