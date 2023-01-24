/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../img/background-hero.png')",
      },
      colors: {
        colorAuth: "#0B8457",
        primary: "#1C7947",
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
      xxxl: { min: "2560px" },
      xxl: { max: "1440px" },

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
