/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary_blue: '#003bdd',
      primary_orange: '#ff5b22',
      beige_100: '#ffefdd',
      beige_200: '#ffd098',
      beige_300: '#bc7016',
      primary_black: '#0e0e0e',
      primary_white: '#ffffff',
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '4.6rem',
      '7xl': '6rem',
    },

    extend: {
      spacing: {
        xxxs: '1rem',
        xxs: '1.5rem',
        xs: '2rem',
        s: '3rem',
        m: '4rem',
        l: '5rem',
        xl: '6rem',
        xxl: '10rem',
        xxxl: '15rem',
      },
    },
  },
  plugins: [],
};
