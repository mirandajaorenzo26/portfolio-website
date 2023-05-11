/** @type {import('tailwindcss').Config} */
// prettier-ignore
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: 'inter',
      },
      colors: {
        'neutral-white': '#F3F3F3 ',
        'dark-neutral-white': '#E1E1E1',
        'neutral-black': '#1B1B1B',
        "light-neutral-black": '#141414',
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
  plugins: [require('prettier-plugin-tailwindcss')]
};
