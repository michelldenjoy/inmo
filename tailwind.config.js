/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta principal: blanco, negro, dorado
        'gold': {
          50:  '#fdfbf4', // dorado muy suave, casi blanco cálido
          100: '#fbf4dc',
          200: '#f6e4a8',
          300: '#e9cf73',
          400: '#dcb84a',
          500: '#c3a265', // color principal
          600: '#a98546',
          700: '#8a6b34',
          800: '#6e5529',
          900: '#5a4422', // dorado muy oscuro, casi marrón
        },
        // Grises elegantes para complementar
        'elegant': {
          black: '#000000',
          white: '#ffffff',
          gray: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          }
        }
      },
      // Sombras elegantes con toque dorado
      boxShadow: {
        'elegant': '0 4px 6px -1px rgba(212, 175, 55, 0.1), 0 2px 4px -1px rgba(212, 175, 55, 0.06)',
        'elegant-lg': '0 10px 15px -3px rgba(212, 175, 55, 0.1), 0 4px 6px -2px rgba(212, 175, 55, 0.05)',
        'elegant-xl': '0 20px 25px -5px rgba(212, 175, 55, 0.1), 0 10px 10px -5px rgba(212, 175, 55, 0.04)',
        'elegant-2xl': '0 25px 50px -12px rgba(212, 175, 55, 0.25)',
      },
      // Animaciones personalizadas
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.8s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        pulseGold: {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0.7)'
          },
          '70%': { 
            opacity: '.9',
            boxShadow: '0 0 0 10px rgba(212, 175, 55, 0)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      // Gradientes personalizados
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
        'gradient-elegant': 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
        'gradient-dark-elegant': 'linear-gradient(135deg, #171717 0%, #262626 100%)',
      },
      // Tipografía elegante
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      // Espaciado adicional
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}