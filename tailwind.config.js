/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html'
  ],
  theme: {
    extend: {
      inset: {
        '1/5': '20%',
      },
      colors: {
        wine: {
          100: '#722F37',
          200: '#722F47',
          300: '#722F57'
        },
        booking: {
          100: 'hsl(264, 100%, 61%)',
          200: 'hsl(293, 100%, 63%)',
          300: 'hsl(270, 20%, 96%)',
          400: 'hsl(271, 36%, 24%)',
          500: 'hsl(289, 100%, 72%)',
          600: 'hsl(276, 100%, 81%)',
          700: 'hsl(276, 55%, 52%)',
          800: 'hsl(271, 15%, 43%)',
          900: 'hsl(206, 6%, 79%)',
          1000: 'hsl(271, 36%, 24%)',
          1100: 'hsl(270, 7%, 64%)'
        }
      },
      backgroundImage: {
        'pattern1': "url('./img/dog-image-1.jpg')",
        'pattern2': "url('./img/dog-image-2.jpg')",
        'pattern3': "url('/public/img/dog-image-3.jpg')",
      },
      fontSize: {
        '10xl': '16rem',
        'xxs': '8px'
      },
      height: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
        '1/8': '12.5%',
      }),
      fontFamily: {
        libre: ['Libre Baskerville'],
        roboto: ['Roboto'],
        lora: ['Lora'],
        cormorant: ['Cormorant'],
        playfair: ['Playfair Display'],
      },
      minHeight: {
        '1/6': '16.666667%',
      },
      padding: {
        '1/6': '16.666667%',
        '1/12': '8.333334%',
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
    },
  },
  plugins: [
    require('@fortawesome/fontawesome-free'),
  ],
}

