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
          DEFAULT: '#845ec2',
          hover: '#af7960',
          focus: '#a26854',
          active: '#875447',
          disabled: '#f1eae3',
        },

        secondary: {
          DEFAULT: '#ff9671',
          hover: '#4a3a29',
          focus: '#3b2c1b',
          active: '#322111',
          disabled: '#f1eae3',
        },

        accent: {
          DEFAULT: '#d65db1',
          hover: '#a0314b',
          focus: '#8b293d',
          active: '#6f1f30',
          disabled: '#fce8ed',
        },

        neutral: {
          DEFAULT: '#263238',
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
        middle: '0px 0px 20px -4px rgba(0, 0, 0, 0.15)',
      },
    },
  },

  plugins: [],
};
