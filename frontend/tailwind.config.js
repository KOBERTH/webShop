/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': '#eaecef',
        'custom-light': '#262837',
        'custom-dark': '#1f1d2b',
        'highlight': '#ec7c6a',
      }
    }
  },
  plugins: [],
}

