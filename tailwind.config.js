/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Merienda: ['Merienda', 'sans-serif'],
        swiggy: ['swiggy-font', 'sans-serif'],
        swiggybold: ['swiggy-font-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
