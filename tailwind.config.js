/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep sophisticated backgrounds
        background: "#0d0d0d",
        surface: "#141414",
        card: "#1a1a1a",
        border: "rgba(201, 169, 97, 0.15)",

        // Luxury gold accents - champagne gold palette
        primary: "#c9a961",
        secondary: "#e8d5a8",
        gold: "#d4af37",
        
        // Platinum and silver tones
        platinum: "#b8b8b8",
        silver: "#c0c0c0",
        steel: "#9a9a9a",

        // Refined text colors
        textPrimary: "#e8e8e8",
        textSecondary: "#b8b8b8",
        textMuted: "#808080",
      },
      fontFamily: {
        sans: ['-apple-system', 'Helvetica Neue', 'Segoe UI', 'Arial', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 4s infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) translateY(-100%)' },
          '100%': { transform: 'translateX(100%) translateY(100%)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
      letterSpacing: {
        luxury: '0.15em',
        'luxury-wide': '0.25em',
      },
      fontWeight: {
        thin: '200',
        light: '300',
      },
    },
  },
  plugins: [],
}
