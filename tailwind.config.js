/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'default': '0 1px 3px rgba(0,0,0,0.1)',
        'lg': '2px 2px 4px rgba(0,0,0,0.2)',
        'xl': '4px 4px 6px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

