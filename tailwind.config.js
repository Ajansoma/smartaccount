/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#5B5CA6',
        'primary-200': '#908CB8',
        'primary-300': '#FAF8FF',
        'primary-400': '#918EDE',
        'sec-100': '#B162A9',
        'sec-200': '#f7eff6',
        'sec-300': '#F07096',
        'sec-400': '#fef1f5',
        'text-100': '#495057',
        'text-200': '#868e96',
      },
    },
  },
  plugins: [],
};
