/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        watermark: 'url(/src/assets/watermark.png)',
      },
      colors: {
        texts: {
          light: '#A8A8B3',
          medium: '#737380',
          dark: '#3D3D4D',
        },
        shapes: {
          light: '#C9C9D4',
          dark: '#121214',
          bg: '#F2F2FA',
        },
        success: '#04D361',
      },
    },
  },
  plugins: [],
};
