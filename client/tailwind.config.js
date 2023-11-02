/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        plaster: ["Plaster", "sans-serif"],
      },
      keyframes: {
        run: {
          "0%": { transform: "translate3d(calc(-28% + 1vw ), 0, 0)" },
          "100%": { transform: "translate3d(calc(-53% + 1vw), 0, 0)" },
        },
        velocityRight: {
          "0%": { transform: "translate3d(calc(-28% + 15vw ), 0, 0)" },
          "100%": { transform: "translate3d(calc(-53% + 15vw), 0, 0)" },
        },
      },
      animation: {
        run: "run 3s linear infinite",
        velocityRight: "run 5s linear infinite",
      },
    },
  },
  plugins: [],
};
