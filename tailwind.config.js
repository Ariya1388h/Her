export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffc4c4',
          300: '#ff9999',
          400: '#ff6666',
          500: '#dc143c',
          600: '#c41230',
          700: '#a50e28',
          800: '#8b0a22',
          900: '#6b0619',
        },
        navy: {
          50: '#f0f4f8',
          100: '#d9e1f2',
          200: '#b3c8e6',
          300: '#8caad9',
          400: '#6691cc',
          500: '#003d7a',
          600: '#003366',
          700: '#002147',
          800: '#001a35',
          900: '#000f1f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
