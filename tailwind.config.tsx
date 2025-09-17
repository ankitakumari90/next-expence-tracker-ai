/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ important
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        foreground: 'var(--foreground-color)',
      },
    },
  },
  plugins: [],
};
