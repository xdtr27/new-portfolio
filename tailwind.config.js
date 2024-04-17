/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': "Noto Serif"
      },
      container: {
        "container": "py-6 px-6 sm:px-10 md:px-18"
      },
      gridTemplateColumns: {
        'projects': 'repeat(auto-fill, minmax(200px, 1fr))',
      },


    },
  },
  plugins: [],
};
