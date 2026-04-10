/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff8f77',
        'primary-dim': '#e12a00',
        'primary-fixed-dim': '#ff5c3b',
        'primary-fixed': '#ff775b',
        'primary-container': '#ff775b',
        'primary-fixed-dim': '#ff5c3b',
        'background': '#040f1c',
        'surface': '#040f1c',
        'surface-container': '#0d1a2a',
        'surface-container-low': '#081422',
        'surface-container-high': '#122032',
        'surface-container-highest': '#172739',
        'surface-container-lowest': '#000000',
        'surface-variant': '#172739',
        'surface-tint': '#ff8f77',
        'outline-variant': '#3e4958',
        'outline': '#6b7686',
        'error': '#ff6e84',
        'error-dim': '#d73357',
        'on-surface': '#dee9fc',
        'on-surface-variant': '#a1acbd',
        'on-primary': '#600c00',
        'on-primary-fixed': '#000000',
        'on-primary-fixed-variant': '#5c0b00',
        'on-secondary': '#49000d',
        'on-tertiary': '#5c1b7d',
        'on-tertiary-fixed': '#300047',
      },
      fontFamily: {
        'headline': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'label': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '0.75rem',
      },
    },
  },
  plugins: [],
};
