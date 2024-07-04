/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'purple': '#816BFF',
      'purple-gray': '#191B2A',
      'grey-button': '#D0D0D0',
      'border-1': '#EEEEEE',
      'border-2': '#E2E2E2',
    },
    extend: {},
  },
  plugins: [],
}

