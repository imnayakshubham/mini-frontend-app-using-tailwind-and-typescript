/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        customGray: '#35373B',
      },
      backdropBlur: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
      },
      transitionProperty: {
        'opacity': 'opacity',
        'transform': 'transform',
        'backdrop': 'backdrop-filter',
      },
      transitionDuration: {
        '500': '500ms',
      },
    },
  },
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]
}

