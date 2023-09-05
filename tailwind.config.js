/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts, tsx}"],
  theme: {
    extend: {
      fontFamily: {
        base : ['Poppins']
      },
      colors: {
        base_four: '#F5F5F5'
      },
      screens: {
        xs: '320px'
      }
    },
  },
  plugins: [],
};
