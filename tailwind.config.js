/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#918EDE',
        'primary-200': '#908CB8',
        'primary-300': '#f4f4fc',
        'primary-400': '#918EDE',
        'primary-500': '#efeff6',
        'sec-100': '#B162A9',
        'sec-200': '#f7eff6',
        'sec-300': '#F07096',
        'sec-400': '#fef1f5',
        'sec-500': '#e6faf4',
        'sec-600': '#00c894',
        'text-100': '#495057',
        'text-200': '#868e96',
      },
    },
  },
  plugins: [],
};
