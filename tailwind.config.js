/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0f0f10',      // Off-Black from brand
          surface: '#1a1a1c',      // Slightly lighter than primary
          elevated: '#242426'      // Even lighter for elevated elements
        },
        accent: {
          red: {
            DEFAULT: '#ed1f42',     // Brand Red
            700: '#c91a37',         // Darker red for hover
            900: '#a1152c'          // Darkest red for pressed states
          }
        },
        brand: {
          'off-white': '#fcedf3',   // Off-White from brand
          'off-black': '#0f0f10',   // Off-Black from brand
          red: '#ed1f42'            // Brand Red
        },
        border: {
          DEFAULT: '#2a2a2c'       // Lighter border for better contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Urbanist', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(239, 35, 60, 0.3)',
        'glow-red-lg': '0 0 40px rgba(239, 35, 60, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
