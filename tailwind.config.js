/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0a',
        'off-black': '#111110',
        charcoal: '#1c1c1a',
        stone: '#2e2e2b',
        ash: '#6b6b66',
        bone: '#c8c4bc',
        cream: '#e8e4dc',
        copper: '#b87333',
        'copper-light': '#d4956a',
      },
      fontFamily: {
        serif: ['EB Garamond', 'Georgia', 'serif'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
