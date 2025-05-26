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
        silver: {
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
        },
      },
      keyframes: {
        'metallic-shine': {
          '0%': { backgroundPosition: '100% 50%' },
          '50%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
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
      },
    },
  },
  plugins: [],
} satisfies Config;
