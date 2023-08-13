/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rubberBand: {
          "0%": { transform: "scaleX(1)" },
          "30%": { transform: "scale3d(1.25,.75,1)" },
          "40%": { transform: "scale3d(.75,1.25,1)" },
          "50%": { transform: "scale3d(1.15,.85,1)" },
          "65%": { transform: "scale3d(.95,1.05,1)" },
          "75%": { transform: "scale3d(1.05,.95,1)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        rubberBand: "rubberBand 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
