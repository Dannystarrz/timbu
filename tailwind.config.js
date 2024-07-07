/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink-100': '#FFF0F3',
        'pink-200': '#FFE7EA',
        'pink-300': '#FFDBE0',
        'pink-400': '#FFCED6',
        'pink-500': '#FFC2CB',
        'pink-600':'#FFE8EC',
        // UI Color
        'base':'#FFB6C1',
        'accent-100':'#D598A1',
        'accent-200':'#AA7981',
        'accent-300':'#805B61',
        'accent-400':'#553D40',
        'accent-500':'#332427',
      },
      
    },
  },
  plugins: [],
}