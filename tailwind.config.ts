import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

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
        'sucess': '#009718',
        'box-gradient': "from-[#0A0020] to-[#412879]"
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        josefin: ["josefin", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"]
      },
      boxShadow: {
        'first-component-shadow': '-5px 5px 10px 4px rgba(0, 0, 0, 0.25)',
        'inner-custom': 'inset 7px 7px 10px 10px rgba(0, 0, 0, 0.25)',
        'custom-drop': '-5px 5px 10px 4px rgba(0, 0, 0, 0.25)',
        'custom-green': '0 0 20px 0 rgba(58, 209, 83, 1)',
        'custom-metodology': '7px 7px 20px 10px rgba(0, 0, 0, 0.25)',
        'metodology': '7px 7px 30px 10px rgba(0, 0, 0, 0.4)'
      },
      backgroundImage: {
        'oportunites': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/3b36feb7-049e-4310-de71-88bbe0a15c00/public')",
        'training-bg': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/e91eba25-bf22-4f41-c58c-eb1e36402d00/public')",
        'metodology': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/bbbdbd57-18d5-4934-06a4-da4648642e00/public')",
        'mobile-metodology': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/4b341c72-a540-4356-2ec3-bb3a23c23d00/public')",
        'number-1': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/923c4570-259e-4297-e05a-63188c4c2300/public')",
        'number-2': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/744e7eda-1eff-4c79-89a4-4ebc1785a200/public')",
        'number-3': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/2b24d001-b14f-4954-29d6-9511f59e0d00/public')",
        'jobscanner': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/6d9b29ee-9ed8-4b99-2597-639c3612cc00/public')",
        'grafico': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/42b4a034-b1ab-496a-6a1a-fce9eee5b000/public')",
        'work': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/22c79fa8-1806-4ff0-2b7a-5611af4c7100/public')",
        'training': "url('https://imagedelivery.net/PFtWkgz-CXgygNiSTt_A-w/aa6c99a3-fd24-4bc5-9776-b3f2e908db00/public')",
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
      }
    },
    textShadow: {
      'feedback': '7px 7px 10px rgba(0, 0, 0, 0.25)'
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'text-shadow': (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;