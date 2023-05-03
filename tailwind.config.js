/** @type {import('tailwindcss').Config} */
// prettier-ignore
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        inter: 'inter',
      },
      colors: {
        'white': '#FCFBFF',
        'semi-white': '#F8F6FB',
        'navy-blue': '#15172A',
        "light-navy-blue": '#1D1F31'
      },
      screens: {
        'sm': '640px',
  
        'md': '768px',
        
        'lg': '1024px',
  
        'xl': '1400px',
  
        '2xl': '1536px',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('prettier-plugin-tailwindcss')],
};
