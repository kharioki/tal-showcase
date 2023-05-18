/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/banner.svg')",
        banner02: "url('/banner02.svg')",
        banner03: "url('/banner03.svg')",
        banner04: "url('/banner04.svg')",
      },
      colors: {
        primary: '#07273B',
        secondary: '#fdcb75',
        tertiary: '#062133',

        lightBlue: '#00A8E8',
        lightPurple: '#A593E0',
        lightGreen: '#00C9A7',
        lightOrange: '#FFB86F',
      },
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      },
    },
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      IBMPlex: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
}
