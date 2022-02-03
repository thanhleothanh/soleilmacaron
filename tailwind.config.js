module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        soleilNavy: '#112152',
        soleilLighterNavy: '#284cbd',
        soleilYellow: '#f9fae8',
      },
      spacing: {
        '5/6': '83%',
        '2/5': '40%',
        '3/5': '60%',
        '2/3': '66%',
        '3/4': '75%',
        '3/2': '120%',
        '1/1': '100%',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.85rem',
      base: '.95rem',
      lg: '1.05rem',
      xl: '1.2rem',
      '2xl': '1.4rem',
      '3xl': '1.65rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',
    },
    fontWeight: {
      thin: 100,
      'extra-light': 200,
      light: 300,
      normal: 400,
      medium: 450,
      semibold: 500,
      bold: 600,
      extrabold: 700,
      black: 800,
    },
  },
  plugins: [],
};
