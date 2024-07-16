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
        'code-bg': '#1F1F1F',
        // Primary colors - use these for your main branding elements such as logos, headers, and key design elements.
        'primary-red': '#CF0A0A',
        'primary-grey': '#EEEEEE',
        'primary-orange': '#DC5F00',
        // Complementary colors - these can be used for backgrounds, secondary text, and other supporting elements.
        'complementary-grey': '#333333',
        'complementary-red': '#8B0000',
        'complementary-orange': '#A14A00',
        'complementary-medium-grey': '#999999',
        'complementary-soft-grey': '#CCCCCC',
        // Accent colors - use these sparingly to draw attention to specific areas or to add a pop of color to your design.
        'accent-gold': '#FFD700',
        'accent-blue': '#1E90FF',
        'accent-green': '#32CD32',
        'accent-purple': '#800080',
        'accent-teal': '#008080',
        'accent-pink': '#FF69B4'
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

