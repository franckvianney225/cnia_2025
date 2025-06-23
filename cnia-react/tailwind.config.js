/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryStart: '#FFFFFF',
        primaryEnd: '#F5F5F5', 
        secondaryStart: '#EDEDED',
        secondaryEnd: '#E0E0E0',
        accent: '#F7941D',
        accentLight: 'rgba(247, 148, 29, 0.5)',
        textLight: '#2F2F2F',
        textDark: '#1A1A1A',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      animation: {
        pulseGlow: 'pulseGlow 3s infinite',
        floating: 'floating 3s ease-in-out infinite',
        scroll: 'scroll 2s infinite',
        blink: 'blink 1s infinite',
        fadeIn: 'fadeIn 0.6s ease-out forwards'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(247, 148, 29, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(230, 126, 34, 0.7)' }
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        scroll: {
          '0%': { top: '10px', opacity: '1' },
          '100%': { top: '30px', opacity: '0' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
