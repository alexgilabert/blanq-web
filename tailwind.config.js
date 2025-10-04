/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Sistema de colores limpio inspirado en la app
        'bg-primary': '#F8F9FA',        // Fondo principal gris muy claro
        'bg-white': '#FFFFFF',          // Blanco puro
        'card-bg': '#FFFFFF',           // Fondo de tarjetas
        'border-light': '#E9ECEF',      // Bordes sutiles
        
        // Textos
        'text-primary': '#2D3436',      // Texto principal oscuro
        'text-secondary': '#636E72',    // Texto secundario
        'text-light': '#B2BEC3',        // Texto muy claro
        
        // Acentos morados (solo para botones y elementos interactivos)
        'purple-primary': '#6C5CE7',    // Morado principal
        'purple-hover': '#5F4FD1',      // Morado hover más oscuro
        'purple-light': '#A29BFE',      // Morado claro
        
        // Estados
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
        'button': '0 2px 4px rgba(108, 92, 231, 0.2)',
        'button-hover': '0 4px 8px rgba(108, 92, 231, 0.3)',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
    },
  },
  plugins: [],
}