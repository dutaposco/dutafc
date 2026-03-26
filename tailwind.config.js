/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--clr-bg)',
        surface: 'var(--clr-surface)',
        'surface-2': 'var(--clr-surface-2)',
        accent: 'var(--clr-accent)',
        'accent-dim': 'var(--clr-accent-dim)',
        'accent-mid': 'var(--clr-accent-mid)',
        gold: 'var(--clr-gold)',
        red: 'var(--clr-red)',
        text: 'var(--clr-text)',
        muted: 'var(--clr-text-muted)',
        soft: 'var(--clr-text-soft)',
        white: '#0f172a', /* Invert white to slate-900 (black) */
        black: '#ffffff', /* Invert black to white */
      },

      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)',
        gold: 'var(--shadow-gold)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,230,118,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(0,230,118,0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease forwards',
        fadeIn: 'fadeIn 0.4s ease forwards',
        'pulse-glow': 'pulse-glow 3s infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
