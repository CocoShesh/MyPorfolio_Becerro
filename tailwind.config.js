export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "nunito-sans": ["Nunito Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        Poppins: ["Poppins", "sans-serif"],
        Mono: ["Space Mono", "monospace"],
        Noto: ["Noto Sans", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 7px 29px 1px rgba(240,171,252,1)",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [require("daisyui")],
};
