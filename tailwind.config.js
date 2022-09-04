/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      transparent: 'transparent',
      'white': '#ffffff',
      'grey': '#F9FAFB',
      'grey-50': '#F9F5FF',
      'grey-200': '#EAECF0',
      'grey-500': '#667085',
      'grey-600': '#475467',
      'grey-700': '#344054',
      'grey-900': '#101828',
      'light-purple': '#F2F4F7',
      'purple': '#6941C6',
      'purple-800': '#53389E',
      'purple-700': '#7F56D9',
      'purple-500': '#AD8AFF',
      'purple-300': '#D6BBFB',
      'purple-30': '#F4EBFF',
      'rose-700': '#be123c',
      'rose-200': '#fecdd3',
      
    },
    screens: {
      'xxs': '475px',
      'xs': '575px',
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        'shadow-purple-action': '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF10'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        'xxl': '115rem',
        'xxxl': '125rem',
      }
    },
  },

  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/forms')
  ],
}