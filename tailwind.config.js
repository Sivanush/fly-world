/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 8s infinite',
        sparkle: 'sparkle 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      colors: {
        primary: '#78DAB8',
        secondary: '#0F1A4D',
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: false }
}


