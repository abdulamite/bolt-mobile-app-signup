/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F6FF',
          100: '#CCE8FF',
          200: '#99D1FF',
          300: '#66BAFF',
          400: '#33A3FF',
          500: '#0066FF', // Main primary color - Deep Blue
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
          950: '#000D1F',
        },
        secondary: {
          50: '#E6FFFE',
          100: '#CCFFFD',
          200: '#99FFFC',
          300: '#66FEFB',
          400: '#33FEFA',
          500: '#00CED1', // Main secondary color - Cyan
          600: '#00A3A5',
          700: '#007A7C',
          800: '#005152',
          900: '#002829',
          950: '#001414',
        },
        accent: {
          50: '#FFF0F6',
          100: '#FFE1ED',
          200: '#FFC3DB',
          300: '#FFA5C9',
          400: '#FF87B7',
          500: '#FF69A5',
          600: '#CC5484',
          700: '#993F63',
          800: '#662A42',
          900: '#331521',
          950: '#1F0D14',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-primary-vertical': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
        'gradient-secondary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(135deg, #001433 0%, #00CED1 100%)',
      },
    },
  },
  plugins: [],
};