/** @type {import('tailwindcss').Config} */
// prettier-ignore
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: 'inter',
      },
      colors: {
        'white': '#FCFBFF',
        'semi-white': '#F8F6FB',
        'navy-blue': '#1D1F31',
      },
      screens: {
        'sm': '640px',
  
        'md': '768px',
        
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
};
