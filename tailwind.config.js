/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1A2F', // Azul escuro
        accent: '#C9A45C',  // Dourado
        grayLight: '#F2F2F2',
        grayMedium: '#7A7A7A',
        white: '#FFFFFF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 16px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1280px',
        },
      }
    },
  },
  plugins: [],
}