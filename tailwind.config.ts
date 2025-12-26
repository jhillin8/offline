import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        cream: '#FAF7F5',
        'offline-black': '#1A1A1A',
        'offline-red': '#D94F2B',
        'offline-gray': '#888888',
        'offline-border': '#E5E0DC',
      },
      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['4.5rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-xl': ['6rem', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
      },
      spacing: {
        'breath-xs': '2rem',
        'breath-sm': '3rem',
        'breath-md': '4rem',
        'breath-lg': '6rem',
        'breath-xl': '8rem',
        'breath-section': '10rem',  // Conceptual section breaks
        'breath-2xl': '12rem',
        'breath-3xl': '16rem',
      },
      lineHeight: {
        'tighter': '1.1',
        'ultra-tight': '0.95',
      },
      letterSpacing: {
        'tighter': '-0.02em',
        'ultra-tight': '-0.04em',
      },
    },
  },
  plugins: [],
}

export default config
