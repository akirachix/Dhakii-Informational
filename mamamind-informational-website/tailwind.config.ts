import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        '37px': '37px',
        '66px': '66px',
        '27px': '27px',
        "size-24": "24px",
        "size-18": "18px",
      },
      colors: {
        Orange: '#F18721',
        Blue: '#02A6A6',
        Black:'#000000',
        blue: "#02A6A6",
        orange: "#F18721",
      },
      width: {
        '517px': '517px', 
      },
   
      screens: {
        ipad: {
          raw: "(min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)",
        },
        "nest-hub": {
          raw: "(min-width: 1024px) and (max-width: 1024px) and (min-height: 600px) and (max-height: 600px)",
        },
        "nest-hub-max": {
          raw: "(min-width: 1280px) and (max-width: 1280px) and (min-height: 800px) and (max-height: 800px)",
        },

        "galaxy-fold": {
          raw: "(min-width: 280px) and (max-width: 280px) and (min-height: 653px) and (max-height: 653px)",
        },
      },
      height: {
        '758px': '758px',
      },

    },
  },
  plugins: [],
};

export default config;


