import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-1' : '#2A7F5B',
        'accent-2' : '#A4E395',
        'accent-3' : '#C6FFB8',
        'accent-4' : '#065B33',
        'primary-2' : '#FCFCFC',
        'primary-3' : '#F8F7F7',
        'secondary-1' : '#373F41', 
        'secondary-2' : '#D1D1D1',
        'secondary-3' : '#262626',
        'secondary-4' : '#5E5E5E',
        'secondary-5' : '#0E0E0E',
        'input-box' :'#69696982',
        'input-text' : '#949494',
        'footer-text' : '#C9C9C9'
      }
    }
  },
  plugins: []
};
export default config;
