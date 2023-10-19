/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        // linear-gradient(to right,#ec733f,#f6930a)
        primary: '#f6930a',
        secondary: '#DEF0DB',
        neutral: {
          10: '#fafafa',
          20: '#E8E8E8',
          30: '#DBDBDB',
          40: '#C2C2C2',
          50: '#A8A8A8',
          60: '#8f8f8f',
          70: '#737373',
          80: '#595959',
          90: '#3b3b3b',
          100: '#262626',
          150: '#F6F6F6',
          200: '#e5e5e5',
          250: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a3a3a3',
          600: '#525252',
          700: '#404040',
          900: '#171717',
          950: '#0a0a0a',
        },
        danger: {
          100: '#D82237',
          200: '#901725',
          300: '#6C111C',
        },
      },
      fontSize: {
        28: [
          '28px',
          {
            fontWeight: '600px',
            letterSpacing: '-0.14px',
          },
        ],
      },
    },
  },
  plugins: [],
};
