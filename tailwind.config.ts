import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        beige: {
          50: '#faf7f2',
          100: '#f5f0e8',
          200: '#ebe3d5',
          300: '#e6d9c7',
          400: '#d5c3a8',
          500: '#c4ad89',
          600: '#b39770',
          700: '#9c7f59',
          800: '#856a47',
          900: '#6e5639',
        },
        warmGrey: {
          50: '#f7f6f5',
          100: '#efecea',
          200: '#dfd9d6',
          300: '#c7bfba',
          400: '#ada39d',
          500: '#8c827c',
          600: '#6b625c',
          700: '#574f4a',
          800: '#403834',
          900: '#2c2825',
        },
        vintage: {
          50: '#fbf0f0',
          100: '#f7e0e0',
          200: '#efc1c1',
          300: '#e49d9d',
          400: '#d67575',
          500: '#c54d4d',
          600: '#993333',
          700: '#802b2b',
          800: '#662222',
          900: '#4d1a1a',
        },
        'ivory': '#FDFFF0',
        'ebony': '#1E1E2A',
        'red': '#970C10',
        'olive': '#D4B483',
      },
      fontFamily: {
        'sans': ['var(--font-inter)'],
        'serif': ['var(--font-playfair)'],
        'chinese': ['var(--font-zhimangxing)'],
      },
      keyframes: {
        'metallic-shine': {
          '0%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'splash-scale': {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(0.95)' },
        },
        'splash-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'twinkle-1': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.2)' },
          '50%': { opacity: '0.6', transform: 'scale(1)' },
        },
        'twinkle-2': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.1)' },
          '50%': { opacity: '0.7', transform: 'scale(1)' },
        },
        'twinkle-3': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.3)' },
          '50%': { opacity: '0.8', transform: 'scale(1)' },
        },
        'twinkle-4': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.2)' },
          '50%': { opacity: '0.6', transform: 'scale(1)' },
        },
        'twinkle-5': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.1)' },
          '50%': { opacity: '0.7', transform: 'scale(1)' },
        },
        'twinkle-6': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.3)' },
          '50%': { opacity: '0.8', transform: 'scale(1)' },
        },
        'twinkle-7': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.2)' },
          '50%': { opacity: '0.6', transform: 'scale(1)' },
        },
        'twinkle-8': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.1)' },
          '50%': { opacity: '0.7', transform: 'scale(1)' },
        },
        'twinkle-9': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.3)' },
          '50%': { opacity: '0.8', transform: 'scale(1)' },
        },
        'twinkle-10': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.2)' },
          '50%': { opacity: '0.6', transform: 'scale(1)' },
        },
        'twinkle-11': {
          '0%, 100%': { opacity: '1', transform: 'scale(1.1)' },
          '50%': { opacity: '0.7', transform: 'scale(1)' },
        },
      },
      animation: {
        'metallic-shine': 'metallic-shine 3s ease-in-out infinite',
        'twinkle-1': 'twinkle-1 3s ease-in-out infinite',
        'twinkle-2': 'twinkle-2 4s ease-in-out infinite',
        'twinkle-3': 'twinkle-3 5s ease-in-out infinite',
        'twinkle-4': 'twinkle-4 3.5s ease-in-out infinite',
        'twinkle-5': 'twinkle-5 4.5s ease-in-out infinite',
        'twinkle-6': 'twinkle-6 5.5s ease-in-out infinite',
        'twinkle-7': 'twinkle-7 3.2s ease-in-out infinite',
        'twinkle-8': 'twinkle-8 4.2s ease-in-out infinite',
        'twinkle-9': 'twinkle-9 5.2s ease-in-out infinite',
        'twinkle-10': 'twinkle-10 3.7s ease-in-out infinite',
        'twinkle-11': 'twinkle-11 4.7s ease-in-out infinite',
        'splash-scale': 'splash-scale 8s ease-in-out infinite',
        'splash-rotate': 'splash-rotate 20s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
