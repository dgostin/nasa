/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtils = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          // scrollbarColor: "rgb(31 29 29) white",
          scrollbarColor: "rgb(31 29 29) blue",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "14px",
          },
          "&::-webkit-scrollbar-track": {
            background: "black",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "green",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
      };

      addUtilities(newUtils, ["responsive", "hover"]);
    },
  ],
};
