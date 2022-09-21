/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        "theme-yellow": "#FBE850",
        "theme-black": "#0A0A0B",
        "theme-dark-grey": "#2E3038",
        "dark-white": "#F2F2F2",
        "test": "#89898A"
      },
      fontFamily: {
        Inter: ["Inter"],
        Prata: ["Prata"]
      }
    },
  },
  plugins: [],
}
