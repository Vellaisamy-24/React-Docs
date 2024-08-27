/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#F6F7F9",
        para: "#EBECF0",
        light: "#99A1B3",
        code: "#343A46",
        lightGreen: "#58C4DC",
      },
    },
  },
  plugins: [],
};
