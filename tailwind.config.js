/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgColor: "#1b1b1b",
        yellow: "#f8efd4",
      },
      fontFamily: {
        BigShoulder: ["Big Shoulders Text", "sans-serif"],
        BigShoulderStencil: ["Big Shoulders Stencil Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
