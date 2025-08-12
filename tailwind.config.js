/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adidas-black': '#000000',
        'adidas-white': '#FFFFFF',
        'adidas-green': '#1E7D3E',
        'adidas-light-green': '#7ABF50',
        'adidas-gray': '#F5F5F5',
        'adidas-dark-gray': '#333333',
      },
      fontFamily: {
        'sans': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'adidas': '0 4px 16px rgba(0,0,0,0.1)',
      },
      height: {
        'screen-90': '90vh',
        '96': '24rem',
      },
      minHeight: {
        'screen-90': '90vh',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
