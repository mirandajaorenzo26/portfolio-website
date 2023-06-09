/** @type {import('tailwindcss').Config} */
// prettier-ignore
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: 'inter',
      },
      colors: {
        'neutral-white': '#F8F6FB ',
        'dark-neutral-white': '#F1F0F3',
        'light-neutral-black': '#141414',
        "neutral-black": '#1B1B1B',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1400px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('prettier-plugin-tailwindcss')]
};
