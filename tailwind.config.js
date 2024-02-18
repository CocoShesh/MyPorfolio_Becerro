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
      shadow: {
        custom: "2px 2px 1px 1px",
      },
     
    },
  },
  plugins: [require("daisyui")],
};
