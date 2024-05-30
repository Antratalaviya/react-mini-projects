/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#1A4D2E",
        "dark-green": "#4F6F52",
        "gray-white": "#E8DFCA",
        "light-green": "#BACD92",
        "light-brown": "#F7DCB9",
        "purple" : "#e3a4fa"
      },
    },
  },
  plugins: [],
};
