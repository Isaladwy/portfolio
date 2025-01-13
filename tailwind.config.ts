import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#F5F5F5',
        darkHover: '#2b2b2b',
        darkSideNav: '#171717',
        darkTheme: '#0a0a0a',
      },
      fontFamily: {
        ovo: ['Ovo', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        black: '4px 4px 0 #000',
        white: '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
