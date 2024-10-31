/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-resume': 'linear-gradient(90deg, #1e3a8a, #9333ea)',
      },
      animation: {
        'gradient-move': 'bgMove 3s ease-in-out infinite',
      },
      keyframes: {
        bgMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
