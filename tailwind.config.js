/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#F5F9FC',
        'custom-purple': '#623CEA',
        'dark-bg': '#161925',
        'code-blue': '#68CDFE',
        'code-brown':'#CE7F50',
        'code-pink': '#DA70B3',
        'code-gold': '#FFCB0E',
        'code-bg': '#1F1F1F'
      },
      fontFamily: {
        'jet-brains-mono': ['JetBrains Mono'],
      },
      minHeight: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh',
      }
    },
  },
  plugins: [],
  darkMode: 'selector'
}

