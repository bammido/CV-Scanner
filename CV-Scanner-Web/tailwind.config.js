/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        progress: 'progress 1s infinite linear',
      },
      colors: {
        primary: '#3b71ca',
        danger: '#DC4C64',
        glass: 'rgba(0,0,0,0.3)',
        dark: '#242424'
      },
      keyframes: {
        progress: {
          '0%': { transform: ' translateX(0) scaleX(0)' },
          '40%': { transform: 'translateX(0) scaleX(0.4)' },
          '100%': { transform: 'translateX(100%) scaleX(0.5)' },
        },
      },
      transformOrigin: {
        'left-right': '0% 50%',
      }
    }
  },
  plugins: [],
  darkMode: 'selector'
}