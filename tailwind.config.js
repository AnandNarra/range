/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#F04F32',
          orangeDark: '#D9381E',
          orangeDeep: '#C02C14',
          orangeLight: '#FFF1EE',
          orangeMuted: '#FFDDD6',
          orangeAccent: '#FF6B4A',
          black: '#09090B',
          dark: '#121215',
          charcoal: '#27272A',
          secondary: '#52525B',
          muted: '#71717A',
          border: '#E4E4E7',
          lightBg: '#F8F9FA',
          offWhite: '#F4F5F6',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(240, 79, 50, 0.25)',
        'brand-lg': '0 20px 35px -10px rgba(240, 79, 50, 0.35)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
