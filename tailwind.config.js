/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3' : '3px',
        '1' : '1px',
      },
      maxWidth: {
        '1.5xl': '39rem'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}