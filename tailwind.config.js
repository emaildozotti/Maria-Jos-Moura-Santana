/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          paper: '#FDFCFB',    // Clean background
          ink: '#1A1C1C',      // Deep charcoal
          authority: '#2D3A3A', // Muted slate pine
          sand: '#C8A97E',     // Soft human accent
          mist: '#F2F1EF',     // Subtle sections
          gold: '#D4AF37',     // Premium gold
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Outfit"', 'sans-serif'], // More premium than Inter
        display: ['"Cinzel"', 'serif'], // For high-end headings
      },
      borderRadius: {
        'premium': '2.5rem',
        'card': '1.5rem',
      },
      backgroundImage: {
        'clean-gradient': 'linear-gradient(135deg, #2D3A3A 0%, #3D4F4F 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'premium': '0 20px 50px -12px rgba(45, 58, 58, 0.08)',
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.03)',
        'nav': '0 4px 30px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'soft-float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
