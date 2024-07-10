/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue,css}",
    "./components/**/*/.{html,js,vue,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        /*
           Comforta font is available on google.fonts.
           Added on <head>.
        */
        comfortaa: ["Comfortaa"],

        /*
           CURRENT-IN-USE
           Iosevka https://typeof.net/Iosevka/
           font is not available for the web from official repo.
           But https://github.com/iosevka-webfonts/iosevka/blob/main/Iosevka.css#LL60 
           Added the css on <head>
           Note -
           Keep the font-weight, font-style from tailwind and the iosevka same for use.
           Works by default. If the problem occurs then the problem is in code not in importing.
         */
        iosevka: ["Iosevka"],
        iosevkaext: ["Iosevka Extended"],
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
