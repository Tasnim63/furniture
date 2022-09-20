/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      blue: '#1e3a8a',
      gray: '#64748b',
     red: '#dc2626',
     lightGray: '#d1d5db',
   
      },
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container:{
    center:true,
    padding: '1rem',
    },
    extend: {
      display:[`group-hover`],
      visibility:[`group-hover`],
    },
  },
  plugins: [],
}
