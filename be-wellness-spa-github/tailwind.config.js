/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          dark: '#16281F', // Deep spruce black
          primary: '#245943', // Elegant forest jade green
          medium: '#327256', // Lush tea green
          light: '#EBF4F0', // Soft mint background tint
          accent: '#A3D9C9',
          brown: {
            deep: '#2F1E14', // Deep aged teak wood
            rich: '#68432B', // Warm mahogany brown
            warm: '#8B5C3B', // Terracotta wood
            light: '#C49E7C', // Caramel wood tint
            cream: '#FDFBF7', // Linen cream
            sand: '#F4EEE5', // Sand beige
          },
          gold: '#C59B27', // Subtle warm bronze gold
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Montserrat"', '"Roboto Condensed"', 'sans-serif'],
      },
      boxShadow: {
        'spa': '0 10px 30px -10px rgba(47, 30, 20, 0.1)',
        'spa-lg': '0 20px 40px -15px rgba(36, 89, 67, 0.15)',
      }
    },
  },
  plugins: [],
}
