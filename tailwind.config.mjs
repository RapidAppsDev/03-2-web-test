/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#581C87',
          800: '#6B21A8',
          700: '#7C3AED',
          600: '#9333EA',
          100: '#F3E8FF',
          50: '#FAF5FF',
        },
        orange: {
          600: '#EA580C',
          500: '#F97316',
          100: '#FFEDD5',
          50: '#FFF7ED',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
