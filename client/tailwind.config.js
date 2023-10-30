/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkColor: '#1E2022',
        mainColor: '#C9D6DF',
        textColor: '#F0F5F9',
        bgColor: '#52616B',
        bgBlueColor: '#D2E0FB',
      },
      width: {
        '400px': '400px',
        '450px': '450px',
        '500px': '500px',
        '550px': '550px',
        '600px': '600px',
        '650px': '650px',
      },
      height: {
        '700px': '700px'
      }
    },

  },
  darkMode: "class",
  plugins: [nextui()]
}

