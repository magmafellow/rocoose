import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wbase: '#141619',
        wsecond: '#687684',
        wbgbase: '#fff',
        wblue: '#1FA1FF',

        dbase: '#fff',
        dsecond: '#a0a0a0',
        dbgbase: '#1f1f1f',
        dblue: '#41b0ff',
      },
    },
  },
  plugins: [],
};
export default config;
