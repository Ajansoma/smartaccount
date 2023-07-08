/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#5B5CA6',
        'primary-200': '#908CB8',
        'primary-300': '#FAF8FF',
        'text-100': '#495057',
        'text-200': '#868e96',
      },
    },
  },
  plugins: [],
};
