/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../img/background-hero.png')",
      },
      colors: {
        colorAuth: "rgba(43, 21, 107, 0.8)",
        primary: "#5F2EEA",
        secondary: "#F5F6F8",
      },
      fontFamily: {
        Inter: ["Inter"],
        Mulish: ["Mulish"],
        OpenSans: ["Open Sans"],
      },
      width: {
        imgMovie: "9.938rem",
        85: "23rem",
      },
      height: {
        imgMovie: "15.25rem",
        wrapNowShowing: "30rem",
      },
    },
    screens: {
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
