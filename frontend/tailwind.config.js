/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#e91e63',
        accent: '#4caf50',
        background: '#000000',
        textPrimary: '#FFFFFF',
        textSecondary: '#757575',
      },
    },
  },
  plugins: [],
}