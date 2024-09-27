/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  safelist: [
    'w-1/12', 'w-1/6', 'w-1/4', 'w-1/3', 'w-5/12',
    'truncate', 'break-all',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        primary: {
          300: '#94a3b8',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
        },
        secondary: {
          500: '#facc15',
          600: '#eab308',
          700: '#ca8a04',
        },
      },
      fontFamily: {
        fredoka: 'Fredoka, sans-serif',
      },
      listStyleType: {
        circle: 'circle',
      }
    },
  },
  plugins: [],
}

