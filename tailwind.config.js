module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#FB2E86',
        'off-navy-blue': '#3F509E',
        'purple': '#7E33E0',
        'navy-blue': '#151875',
        'red': '#FB2448',
        'blue': '#2F1AC4',
        'pantone-purple': '#E0D3F5',
        'off-blue': '#151875',
        'deep-cove': '#0D0E43',
        'lavender-mist': '#E7E6EF',
        'titan-white': '#F2F0FF',
        'wild-blue': '#8A8FB9',
        'white-lilac': '#F6F7FB',
        'dark-indigo': '#1A0B5B',
        'desert-storm': '#F7F7F7',
        'malachite': '#08D15F',
        'newcolor': '#1A0B5B4D',
        'transparent-color': '#1518754D',
        'spun-pearl': '#ACABC3',
        'white-smoke': '#F5F6F8',
        'vista-white': '#FFF6FB',
        'french-grey': '#B7BACB',
        'storm-grey': '#72718F',
        'regent-grey': '#9295AA',
        'blue-berry': '#3F509E',
        'gulf-blue': '#0D134E',
        'gull-grey': '#A1A8C1'
      },
      fontFamily: {
        'sans': ['Josefin Sans', "sans-serif"],
        'lato': ['Lato', "sans-serif"]
      },
      screens: {
        'xs': { 'max': '400px' },
        'bs': { 'min': '401px', 'max': '639px' },
        'mobile': { 'max': '639px' }
      },
      boxShadow: {
        'custom': ' 0px 0px 25px 10px #F6F4FD'
      }
    },
  },
  plugins: [],
}
