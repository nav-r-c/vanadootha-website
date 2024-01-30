import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'accent' : '#2A7F5B',
        'accent-2' : '#A4E395',
        'accent-3' : '#0D422F',
        'accent-4' : '#065B33',
        'secondary' : '#251523',
        'secondary-2' : '#D1CECE',
        'secondary-3' : '#373F41'
      },
      fontFamily: {
        'satoshi-variable': ['Satoshi-Variable', 'sans-serif'],
        'satoshi-variable-italic': ['Satoshi-VariableItalic', 'sans-serif'],
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-light-italic': ['Satoshi-LightItalic', 'sans-serif'],
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-medium-italic': ['Satoshi-MediumItalic', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-bold-italic': ['Satoshi-BoldItalic', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', 'sans-serif'],
        'satoshi-black-italic': ['Satoshi-BlackItalic', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
