import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#412979',
        'seconday': '#FFB600',
        'bg-black': '#181818',
        'violet': 'rgba(88, 55, 164, 0.26)'
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        josefin: ["josefin", "sans-serif"],
      },
      boxShadow: {
        'first-component-shadow': '-5px 5px 10px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;