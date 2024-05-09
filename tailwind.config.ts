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
        'softviolet': '#B59FE1',
        'violet': 'rgba(88, 55, 164, 0.26)',
        'dark-blue': '#0a0020',
        'vivid-purple': '#412979',
        'sucess': '#009718'
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        josefin: ["josefin", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"]
      },
      boxShadow: {
        'first-component-shadow': '-5px 5px 10px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'oportunites': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/3b36feb7-049e-4310-de71-88bbe0a15c00/public')"
      }
    },
  },
  plugins: [],
};
export default config;