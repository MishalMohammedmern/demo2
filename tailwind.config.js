/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'gray1':'#7D8085',
        'whiteGray':'#E2E2E2',
        'accent':'#FCAF17',
        'textblack': '#393D46',
        'buttoncolor': '#E2E2E2',
        'color1': '#FCAF17',
        'firstbody':'#F1F1F1',
        'div': '#D9D9D9'
        
      },
      margin:{
        '30%':'30%',
        '768':'768px',
        '360':'360px',
        '55%':'55%',
        '88':'88px',
        '27%':'27%',
        '103':'103px',
        '132': '128px'
      },
      fontFamily: {
        noto : ['Noto Serif Tamil', 'serif']
      },
      height: {
        '768': '768px',
        '968':'968px',
        '460':'460px',
        '506':'506px',
        '224':'224px',
        '540':'540px',
        '518':'518px',
        '265':'265px'
        
      },
      width: {
        '849':'849px',
        '518':'518px',
        '215':'215px',
        '98%': '98%',
        '343': '343px',
        '350':'350px',
        '90%':'90%',
        '360':'360px',
        '400':'400px',
        '702':'702px',
        '1719':'1719px',
        '267':'267px',
        '600':'600px',
        '415':'415px',
        '650':'650px',
        '373':'373px',
        '731':'731px'
      }
      
    }
  },
  plugins: [],
}

