/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "200": "#9C9C9C",
          "300": "#7B809A",
          "400": "#F5F7FA",
          "500": "#F2F4F7",
          "600": "#D7D7D7",
          "700": "#B1B1B1"
        },
        primary: {
          main: '#053436',
          "50": "#085F63",
        }
      },
      textColor: {
        primary: {
          main: '#053436',
          "50": "#085F63",
        },
        gray: {
          "200": "#9C9C9C",
          "300": "#7B809A",
          "400": "#F5F7FA",
          "500": "#F2F4F7",
          "600": "#D7D7D7",
          "700": "#B1B1B1"
        },
        white: {
          main: '#FFFFFF'
        },
        disabled: 'rgba(8, 95, 99, 0.05)',
        secondary: '#344767'
      }
    },
  },
  plugins: [],
}