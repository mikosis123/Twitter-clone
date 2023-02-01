/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  images:{
    domains: ["media.istockphoto.com"]
  },

  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
