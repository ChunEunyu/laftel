/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bg-gray': '#F7F7F7',
      'white': '#ffffff',
      'charcoal': '#8A8A8A',
      'navy': '#191b2a',
      'smoked-black': '#505050',
      'black': '#000000',
      'purple': '#816BFF',
      'purple-2':'#a797ff',
      'red' : '#F16361',
      'light-purple': '#f0edff',
      'purple-gray': '#191B2A',
      'grey-button': '#D0D0D0',
      'border-1': '#EEEEEE',
      'border-2': '#E2E2E2',
      'background-dim-1' : 'rgba(0, 0, 0, 0.5)',
    },
    extend: {
      backgroundImage: {
        'auth' : `
          url('/assets/auth/BG_0.png'), 
          url('/assets/auth/BG_1.png'),
          url('/assets/auth/BG_2.png'),
          url('/assets/auth/BG_3.png'),
          url('/assets/auth/BG_4.png'),
        `
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}

