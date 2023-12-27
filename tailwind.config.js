/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa"],
      },
      colors: {
        cstm_black: "#141414",
        cstm_black_perl: "#1D2026",
        cstm_red: "#D95468",
        cstm_white: "#AABBCC",
        cstm_light_green: "#8BD49C",
      },
    },
  },
  plugins: [],
};
