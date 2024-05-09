/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700',
        'highlight': '#FFDB58',
        // Add more custom colors as needed
      },
      fontFamily: {
        pop: ['Poppins','sans-serif'],
        sedan:['Sedan SC','sans-serif']
      },
    },
  },
  plugins: [],
}

