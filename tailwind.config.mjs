/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant', 'serif'],
      },
      colors: {
        'flame': '#E25822',
        'gold': '#FFD700',
      }
    },
  },
  plugins: [],
}