module.exports = {
  purge: {
    content: [
      './public/index.html',
      './src/**/*.vue',
      './src/**/*.js',
    ],
    options: {
      safelist: ['bg-gradient-radial', 'animate-spin-slow'],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a5b8fc',
          400: '#8193f8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#1e3a8a',
          900: '#1e40af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
