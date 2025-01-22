/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#0A0A0B',
          blue: '#00F0FF',
          purple: '#BD00FF',
          pink: '#FF0099',
          'blue-glow': '#00F0FF20',
          'purple-glow': '#BD00FF20',
          'pink-glow': '#FF009920',
        },
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'grid-flow': 'grid-flow 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00F0FF40, 0 0 20px #00F0FF20' },
          '100%': { textShadow: '0 0 20px #00F0FF60, 0 0 30px #00F0FF40' },
        },
        'grid-flow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
    },
  },
  plugins: [],
};