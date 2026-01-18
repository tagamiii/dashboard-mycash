/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',   // Mobile
      'md': '768px',   // Tablet
      'lg': '1024px',  // Desktop breakpoint as defined in prompt
      'xl': '1280px',  // Standard Large
      '2xl': '1536px', // Extra Wide
    },
    extend: {
      colors: {
        brand: {
          lime: 'rgb(var(--color-brand-lime) / <alpha-value>)',
          black: 'rgb(var(--color-brand-black) / <alpha-value>)',
          white: 'rgb(var(--color-brand-white) / <alpha-value>)',
        },
        state: {
          success: 'rgb(var(--color-state-success) / <alpha-value>)',
          error: 'rgb(var(--color-state-error) / <alpha-value>)',
          warning: 'rgb(var(--color-state-warning) / <alpha-value>)',
          info: 'rgb(var(--color-state-info) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
