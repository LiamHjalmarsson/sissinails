/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './app/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './app/pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
    './app/plugins/**/*.{js,ts,mjs}',
    './app/composables/**/*.{js,ts,mjs}',
    './app/utils/**/*.{js,ts,mjs}',
    './app/app.config.{js,ts,mjs}',
  ],

  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },

      colors: {
        primary: {
          DEFAULT: '#d0649a',
          hover: '#bc467b',
          focus: '#a23463',
          active: '#862e52',
          disabled: '#fbf4f8',
        },

        secondary: {
          DEFAULT: '#ff9671',
          hover: '#ed1e09',
          focus: '#c51109',
          active: '#9c1010',
          disabled: '#fff2ed',
        },

        accent: {
          DEFAULT: '#9a7fd3',
          hover: '#845ec2',
          focus: '#7751b0',
          active: '#644394',
          disabled: '#f7f6fc',
        },

        neutral: {
          DEFAULT: '#1F1E1D',
          darkGray: '#4D4D4D',
          gray: '#717171',
          lightGray: '#89939E',
          silver: '#F5F7FA',
          white: '#FFFFFF',
        },
      },

      boxShadow: {
        DEFAULT: '0px 1px 4px 2px rgba(0, 0, 0, 0.10)',
        right: '6px 8px 25px -4px rgba(0, 0, 0, 0.15)',
        left: '-12px 0px 25px -4px rgba(0, 0, 0, 0.15)',
        bottom: '8px 0px 25px -4px rgba(0, 0, 0, 0.10)',
        top: '0px 0px 20px -6px rgba(0, 0, 0, 0.4)',
        middle: '0px 0px 20px -6px rgba(0, 0, 0, 0.15)',
        hover: '0px 10px 25px -6px rgba(0, 0, 0, 0.15)',
      },
    },
  },

  plugins: [],
};
