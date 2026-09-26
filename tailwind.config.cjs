/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        koa: {
          oled: '#060606',
          surface: '#111111',
          card: '#181716',
          cream: '#F4EFEA',
          bone: '#EAE4DC',
          latte: '#D7C7B7',
          amber: '#E39D48',
          gold: '#F5B054',
          espresso: '#2B1B14'
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Italiana', 'serif'],
        kurdish: ['Noto Sans Arabic', 'sans-serif']
      },
      animation: {
        'float-slow': 'floating 7s ease-in-out infinite',
        'pulse-subtle': 'subtlePulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 30s linear infinite'
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' }
        },
        subtlePulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' }
        }
      }
    },
  },
  plugins: [],
};