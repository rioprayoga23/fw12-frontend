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
      },
      height: {
        imgMovie: "15.25rem",
        wrapNowShowing: "30rem",
      },
    },
  },
  plugins: [],
};
