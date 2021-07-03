module.exports = {
  mode: "jit",
  important: true,
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./svg.*",
    "./fa.*"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        navbar: "0 0 15px 0 rgb(0 0 0 / 4%)",
        card: "0 15px 30px -8px rgb(0 0 0 / 8%)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
