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
      },
      fontFamily: {
        Inter: ["Inter"],
        Mulish: ["Mulish"],
      },
    },
  },
  plugins: [],
};
