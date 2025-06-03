/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#0a0a0b',
        'slate-custom': '#151519',
        'charcoal': '#1f1f23',
        'steel': '#2a2a30',
        'platinum': '#e8e9ea',
        'silver-custom': '#b4b6b8',
        'chrome': '#6b6d70',
        'electric': '#00d4ff',
        'neon': '#39ff14',
        'amber-custom': '#ffb800',
        'rose-custom': '#ff6b9d',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'gradient-x': 'gradient-x 8s ease-in-out infinite',
        'text-shimmer': 'text-shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5), 0 0 40px rgba(57, 255, 20, 0.3)' 
          },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'progressBar1': {
          '0%': { transform: 'translateX(-100%)', opacity: '1' },
          '15%': { transform: 'translateX(0%)', opacity: '1' },
          '90%': { transform: 'translateX(0%)', opacity: '1' },
          '95%, 100%': { transform: 'translateX(0%)', opacity: '0' }
        },
        'progressBar2': {
          '0%, 20%': { transform: 'translateX(-100%)', opacity: '1' },
          '35%': { transform: 'translateX(0%)', opacity: '1' },
          '90%': { transform: 'translateX(0%)', opacity: '1' },
          '95%, 100%': { transform: 'translateX(0%)', opacity: '0' }
        },
        'progressBar3': {
          '0%, 40%': { transform: 'translateX(-100%)', opacity: '1' },
          '55%': { transform: 'translateX(0%)', opacity: '1' },
          '90%': { transform: 'translateX(0%)', opacity: '1' },
          '95%, 100%': { transform: 'translateX(0%)', opacity: '0' }
        },
        'progressBar4': {
          '0%, 60%': { transform: 'translateX(-100%)', opacity: '1' },
          '75%': { transform: 'translateX(0%)', opacity: '1' },
          '90%': { transform: 'translateX(0%)', opacity: '1' },
          '95%, 100%': { transform: 'translateX(0%)', opacity: '0' }
        },
        'progressBar5': {
          '0%, 80%': { transform: 'translateX(-100%)', opacity: '1' },
          '85%': { transform: 'translateX(0%)', opacity: '1' },
          '90%': { transform: 'translateX(0%)', opacity: '1' },
          '95%, 100%': { transform: 'translateX(0%)', opacity: '0' }
        },
        'light1': {
          '0%, 15%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          },
          '15.1%, 90%': { 
            opacity: 1,
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.6)' 
          },
          '95%, 100%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          }
        },
        'light2': {
          '0%, 35%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          },
          '35.1%, 90%': { 
            opacity: 1,
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.6)' 
          },
          '95%, 100%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          }
        },
        'light3': {
          '0%, 55%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          },
          '55.1%, 90%': { 
            opacity: 1,
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.6)' 
          },
          '95%, 100%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          }
        },
        'light4': {
          '0%, 75%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          },
          '75.1%, 90%': { 
            opacity: 1,
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.6)' 
          },
          '95%, 100%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          }
        },
        'light5': {
          '0%, 85%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          },
          '85.1%, 90%': { 
            opacity: 1,
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.6)' 
          },
          '95%, 100%': { 
            opacity: 0,
            boxShadow: '0 0 0 rgba(74, 222, 128, 0)' 
          }
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}