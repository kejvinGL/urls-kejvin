module.exports = {
  content: ["index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "urlS-primary": '#242424',
        "urlS-secondary": '#454545',

      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screen: {
      sm: "640px",
      md: "768px",
    },

  },
  plugins: [require("daisyui")],
};
