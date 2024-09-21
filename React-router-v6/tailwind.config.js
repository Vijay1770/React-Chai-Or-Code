// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This line makes sure Tailwind CSS works with React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
