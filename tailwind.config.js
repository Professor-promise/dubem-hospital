/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  theme: {
    extend: {
      colors: {
        mainRed: 'var(--mainRed)',
        mainOrange: 'var(--mainOrange)',
        mainPurple: 'var(--mainPurple)',
        mainBlue: 'var(--mainBlue)',
        mainGreen: 'var(--mainGreen)',
        lightGreen: 'var(--lightGreen)',
        mainBrown: 'var(--mainBrown)',
        mainWhite: 'var(--mainWhite)',
        mainBlack: 'var(--mainBlack)',
        mainGray: 'var(--mainGray)',
        lightPurple: 'var(--lightPurple)',
        textColor: 'var(--textColor)',
      },
      fontFamily: {
        auxFont: 'var(--auxFont)',
        mainFont: 'var(--mainFont)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
