/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'primary': {
          120: '#7B6651',
          100 : '#BF9D7D',
          80 : '#D0B79F',
          60 : '#E1D1C2',
          'Tint' : '#F7F2EE',
        },
        'success': {
          120: '#299F65',
          100 : '#52DD7E',
          20 : '#BCFBBD',
          10 : '#E8FEE7',
        },
        'info': {
          120: '#1D66AC',
          100 : '#3BADEF',
          20 : '#B1EFFD',
          10 : '#E6FBFE',
        },
        'error': {
          120: '#C22538',
          100 : '#DA3E51',
          20 : '#F5CCD1',
          10 : '#FDECEF',
        },
        'neutral': {
          'background': '#140F0A',
          100: '#000000',
          80: '#4B4B4B',
          60: '#909090',
          40: '#ECECEC',
          10: '#F9F9F9',
          0: '#FFFFFF'
        }
      },
      fontFamily: {
        base: 'Noto Serif TC',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

