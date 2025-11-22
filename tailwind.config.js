/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pokemon: {
          red: "#FF3E4D",
          blue: "#3B5CA8",
          yellow: "#FFD34E",
          navy: "#0A1224",
          offnavy: "#1A1F34",
        },
      },
    },
  },
  plugins: [],
}
