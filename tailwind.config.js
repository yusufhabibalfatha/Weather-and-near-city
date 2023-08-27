/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts, tsx}"],
  theme: {
    extend: {
      fontFamily: ['Poppins'],
      colors: {
        // base_one: '#606C5D',
        // base_two: '#FFF4F4',
        // base_three: '#F7E6C4',
        base_four: '#F5F5F5'
      },
      screens: {
        xs: '320px'
      }
    },
  },
  plugins: [],
};
