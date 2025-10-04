/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'card-background': '#19191B',      // Color de fondo rectángulos
        'card-border-color': '#424149', // Color para el borde/línea fina #424149 #12
        'dark-purple': '#1F172C', 
        'bg-dark-purple': '#0C0E16',
        'button-purple': '#782FCE', // Botón
        'text-white-light': '#FFFFFF', // Texto
        'number-purple': '#782FCE', // Números
      },
      spacing: {
        'icon-w': '31.87px',
        'icon-h': '35.58px',
        'btn-h': '35px',
        'm-left': '40px', 
        
        'header-y-padding': 'clamp(1.5rem, 5vw, 2.5rem)', 
        'btn-w': 'clamp(5rem, 25vw, 10.9375rem)', 
        // 'header-padding-top': 'clamp(2rem, 10vw, 8rem)', // OLD
        'header-padding-top': 'clamp(1rem, 10vw, 8rem)', // ¡AJUSTADO! Nueva escala: 16px a 128px
        'header-x-offset': 'clamp(1rem, 2.5vw, 2.5rem)', 
        'nav-x-padding': 'clamp(0.5rem, 1.5vw, 1rem)', 
        'hero-section-x-padding': 'clamp(1rem, 5vw, 2.5rem)', 
        'hero-text-mb': 'clamp(1rem, 3vw, 2rem)', 
        'hero-image-mt': 'clamp(2rem, 5vw, 4rem)', 
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'dm-serif': ['"DM Serif Text"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'laia-text': 'clamp(0.9rem, 4vw, 1.2rem)', 
        'ayuda-text': 'clamp(0.8rem, 3vw, 1rem)', 
        'descargar-text': 'clamp(1rem, 4.5vw, 1.3rem)', 
        
        'hero-title': 'clamp(1.6rem, 3.33vw, 3rem)', 
        'hero-subtitle': 'clamp(0.7rem, 1.38vw, 1.25rem)',
      },
      width: {
        'hero-image-w': 'clamp(60rem, 60vw, 70rem)', 
      }
    },
  },
  plugins: [],
}