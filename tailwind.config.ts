/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': 'var(--light-bg)',
        'light-card': 'var(--light-card)',
        'light-primary': 'var(--light-primary)',
        'light-secondary': 'var(--light-secondary)',
        'light-accent': 'var(--light-accent)',
        'dark-bg': 'var(--dark-bg)',
        'dark-card': 'var(--dark-card)',
        'dark-primary': 'var(--dark-primary)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-accent': 'var(--dark-accent)',
      },
      fontFamily: {
        sans: 'var(--font-geist-sans)',
        mono: 'var(--font-geist-mono)',
      },
    },
  },
  darkMode: ['class', 'html.dark'],
  plugins: [],
};

