/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        bg: '#030508',
        surface: '#0a0d14',
        surface2: '#0f1320',
        border: '#1a2035',
        lime: '#b9ff4b',
        cyan: '#00e5ff',
        orange: '#ff5c00',
        pink: '#ff2d78',
        muted: '#4a5568',
        light: '#e8edf5',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee 25s linear infinite reverse',
        'marquee-slow': 'marquee 40s linear infinite',
        'glitch1': 'glitch1 4s infinite',
        'glitch2': 'glitch2 4s infinite',
        'blink': 'blink 1s step-end infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        glitch1: {
          '0%,90%,100%': { transform: 'translate(-3px,0)', clipPath: 'polygon(0 30%,100% 30%,100% 55%,0 55%)' },
          '92%': { transform: 'translate(3px,0)' },
          '94%': { transform: 'translate(-1px,2px)' },
          '96%': { transform: 'translate(1px,-2px)' },
        },
        glitch2: {
          '0%,90%,100%': { transform: 'translate(3px,0)', clipPath: 'polygon(0 65%,100% 65%,100% 80%,0 80%)' },
          '92%': { transform: 'translate(-3px,0)' },
          '94%': { transform: 'translate(2px,-1px)' },
          '96%': { transform: 'translate(-2px,1px)' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        pulseDot: {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.8)' },
        },
        scrollLine: {
          '0%,100%': { opacity: 0.3, transform: 'scaleY(0.5)', transformOrigin: 'top' },
          '50%': { opacity: 1, transform: 'scaleY(1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
