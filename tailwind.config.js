/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fin: ['Roboto']
      },
      colors: {
        'bg-black-fanuc': '#14130C',
        'bg-yellow-fanuc': '#FFDF1A',
        'primary-light': '#725c00',
        'on-primary-light': '#ffffff',
        'primary-container-light': '#ffe07e',
        'on-primary-container-light': '#231b00',
        'primary-fixed-light': '#ffe07e',
        'on-primary-fixed-light': '#231b00',
        'primary-fixed-dim-light': '#edc200',
        'on-primary-fixed-variant-light': '#564500',
        'secondary-light': '#bf0021',
        'on-secondary-light': '#ffffff',
        'secondary-container-light': '#ffdad7',
        'on-secondary-container-light': '#410005',
        'secondary-fixed-light': '#ffdad7',
        'on-secondary-fixed-light': '#410005',
        'secondary-fixed-dim-light': '#ffb3af',
        'on-secondary-fixed-variant-light': '#930017',
        'tertiary-light': '#006b53',
        'on-tertiary-light': '#ffffff',
        'tertiary-container-light': '#81f8d1',
        'on-tertiary-container-light': '#002117',
        'tertiary-fixed-light': '#81f8d1',
        'on-tertiary-fixed-light': '#002117',
        'tertiary-fixed-dim-light': '#63dbb6',
        'on-tertiary-fixed-variant-light': '#00513e',
        'error-light': '#ba1a1a',
        'error-container-light': '#ffdad6',
        'on-error-light': '#ffffff',
        'on-error-container-light': '#410002',
        'background-light': '#fffbff',
        'on-background-light': '#1e1b16',
        'outline-light': '#7d7767',
        'inverse-on-surface-light': '#f7f0e7',
        'inverse-surface-light': '#33302a',
        'inverse-primary-light': '#edc200',
        'shadow-light': '#000000',
        'surface-tint-light': '#725c00',
        'outline-variant-light': '#cec6b4',
        'scrim-light': '#000000',
        'surface-light': '#fff8f0',
        'on-surface-light': '#1e1b16',
        'surface-variant-light': '#ebe2cf',
        'on-surface-variant-light': '#4c4639',
        'surface-container-highest-light': '#e8e2d9',
        'surface-container-high-light': '#eee7de',
        'surface-container-light': '#f4ede4',
        'surface-container-low-light': '#faf3e9',
        'surface-container-lowest-light': '#ffffff',
        'surface-dim-light': '#dfd9d0',
        'surface-bright-light': '#fff8f0'
      }
    }
  },
  plugins: []
}
