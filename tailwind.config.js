/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/html/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'amber': {
          450:'#FFB51F'
        }
      },
      fontFamily: {
        'RobotoRegular': "Roboto",
        'SourceSansBold' : "SourceSans"
      },
     container: {
        center:true,
        padding: {
         Default: '1rem',
         lg:'2rem'
        },
      },
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
  
    },
  },
  plugins: [ function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },],
}

