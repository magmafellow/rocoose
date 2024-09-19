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
        wbase: '#141619',
        wsecond: '#687684',
        wbgbase: '#fff',
        wblue: '#1FA1FF',
      },
    },
  },
  plugins: [],
};
export default config;
