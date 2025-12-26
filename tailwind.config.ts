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
    },
  },
  plugins: [],
}

export default config
