/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': '768px',   // Tablet
      'lg': '1280px',  // Desktop
      'xl': '1920px',  // Wide / 4K
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Default to Inter as per user rules suggest
      },
    },
  },
  plugins: [],
}
