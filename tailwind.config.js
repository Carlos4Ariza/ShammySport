/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    ".pages/**/*.{html,ts}",
    ".componentes/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC',
      },
    },
  },
  plugins: [],
}

