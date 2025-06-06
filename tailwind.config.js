/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kindle Design System Color Palette
        kindle: {
          // Background colors
          'bg-primary': '#171717',        // Main dark background
          'bg-secondary': '#1c1917',      // Secondary background  
          'bg-tertiary': '#292524',       // Card backgrounds
          
          // Text colors
          'text-primary': '#f5f5f4',      // Main text
          'text-secondary': '#e7e5e4',    // Secondary text
          'text-tertiary': '#d6d3d1',     // Muted text
          'text-quaternary': '#a8a29e',   // Subtle text
          'text-quinary': '#78716c',      // Very subtle text
          
          // Interactive states
          'interactive-subtle': 'rgba(120, 113, 108, 0.12)',
          'interactive-hover': 'rgba(120, 113, 108, 0.20)',
          'interactive-pressed': 'rgba(168, 162, 158, 0.15)',
          
          // Borders
          'border-subtle': 'rgba(120, 113, 108, 0.15)',
          'border-medium': 'rgba(120, 113, 108, 0.30)',
          'border-strong': 'rgba(168, 162, 158, 0.50)',
          
          // Glass effects
          'glass-light': 'rgba(120, 113, 108, 0.08)',
          'glass-medium': 'rgba(87, 83, 78, 0.12)',
          'glass-strong': 'rgba(87, 83, 78, 0.15)',
          
          // Accent colors
          'accent': '#f59e0b',
          'accent-muted': 'rgba(245, 158, 11, 0.6)',
          
          // Shadows
          'shadow-warm': 'rgba(245, 158, 11, 0.08)',
          'shadow-subtle': 'rgba(120, 113, 108, 0.05)',
        },
        
        // Semantic color aliases that map to Tailwind standards
        background: {
          DEFAULT: '#171717',
          secondary: '#1c1917',
          tertiary: '#292524',
        },
        
        foreground: {
          DEFAULT: '#f5f5f4',
          secondary: '#e7e5e4', 
          muted: '#d6d3d1',
          subtle: '#a8a29e',
        },
        
        border: {
          DEFAULT: 'rgba(120, 113, 108, 0.15)',
          medium: 'rgba(120, 113, 108, 0.30)',
          strong: 'rgba(168, 162, 158, 0.50)',
        },
        
        accent: {
          DEFAULT: '#f59e0b',
          foreground: '#171717',
          muted: 'rgba(245, 158, 11, 0.6)',
        },
      },
      
      backgroundColor: {
        // Design system background utilities
        'ds-primary': 'var(--bg-primary)',
        'ds-secondary': 'var(--bg-secondary)', 
        'ds-tertiary': 'var(--bg-tertiary)',
        'ds-interactive': 'var(--interactive-bg-subtle)',
        'ds-glass': 'var(--glass-bg-light)',
      },
      
      textColor: {
        // Design system text utilities
        'ds-primary': 'var(--text-primary)',
        'ds-secondary': 'var(--text-secondary)',
        'ds-tertiary': 'var(--text-tertiary)',
        'ds-quaternary': 'var(--text-quaternary)',
        'ds-quinary': 'var(--text-quinary)',
      },
      
      borderColor: {
        // Design system border utilities
        'ds-subtle': 'var(--border-subtle)',
        'ds-medium': 'var(--border-medium)',
        'ds-strong': 'var(--border-strong)',
      },
      
      boxShadow: {
        // Custom shadows for the design system
        'warm': '0 25px 50px -12px var(--shadow-warm)',
        'warm-lg': '0 35px 60px -12px var(--shadow-warm)',
        'warm-sm': '0 10px 25px -3px var(--shadow-warm)',
        'glass': '0 8px 32px 0 rgba(120, 113, 108, 0.08)',
        'glow': '0 0 20px var(--accent-warm-muted)',
        'glow-strong': '0 0 40px var(--accent-warm), 0 0 60px var(--accent-warm-muted)',
      },
      
      animation: {
        // Custom animations
        'float': 'float 6s ease-in-out infinite',
        'glow': 'elegantGlow 3s ease-in-out infinite',
        'pulse-warm': 'pulseWarm 2s ease-in-out infinite',
        'beam-float-left': 'beamFloatLeft1 12s ease-in-out infinite',
        'beam-float-right': 'beamFloatRight1 15s ease-in-out infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseWarm: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'system': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        // Consistent typography scale
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }], 
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
      },
      
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
      },
      
      spacing: {
        // Additional spacing for the design system
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      
      borderRadius: {
        // Consistent border radius scale
        'sm': '0.375rem',
        'md': '0.5rem', 
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [
    // Custom plugin for design system utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Glass morphism utilities
        '.glass-subtle': {
          background: 'var(--glass-bg-light)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--border-subtle)',
        },
        '.glass-medium': {
          background: 'var(--glass-bg-medium)', 
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-medium)',
        },
        '.glass-strong': {
          background: 'var(--glass-bg-strong)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-strong)',
        },
        
        // Interactive state utilities
        '.interactive': {
          backgroundColor: 'var(--interactive-bg-subtle)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'var(--interactive-bg-hover)',
          },
        },
        
        // Text hierarchy utilities
        '.text-hierarchy-1': { 
          color: 'var(--text-primary)',
          fontWeight: '300',
        },
        '.text-hierarchy-2': { 
          color: 'var(--text-secondary)',
          fontWeight: '300',
        },
        '.text-hierarchy-3': { 
          color: 'var(--text-tertiary)',
          fontWeight: '300',
        },
        '.text-hierarchy-4': { 
          color: 'var(--text-quaternary)',
          fontWeight: '300',
        },
        '.text-hierarchy-5': { 
          color: 'var(--text-quinary)',
          fontWeight: '300',
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
}