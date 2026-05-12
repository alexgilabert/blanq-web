/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#f9f9fe',
        'bg-white': '#FFFFFF',
        'card-bg': '#FFFFFF',
        'border-light': '#E9ECEF',

        'text-primary': '#2c333d',
        'text-secondary': '#5f5e60',
        'text-light': '#B2BEC3',

        'purple-primary': '#007aff',
        'purple-hover': '#005bc2',
        'purple-light': '#7faeff',

        'success': '#00B894',
        'error': '#D63031',
      },
      spacing: {
        'nav-height': '70px',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero-title': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'hero-subtitle': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'section-title': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'card-title': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'header': '0 1px 3px rgba(0, 0, 0, 0.06)',
        'button': '0 2px 4px rgba(0, 122, 255, 0.2)',
        'button-hover': '0 4px 8px rgba(0, 122, 255, 0.3)',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
    },
  },
  plugins: [],
}
