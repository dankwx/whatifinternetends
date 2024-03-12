import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'main-color': '#BCD8C1',
        'second-color': '#89CE94',
        'terciary-color': '#007991',
        'fourth-color': '#222E50'
      },
      fontFamily: {
        main: ['IBM Plex Sans', 'sans-serif'],
        titleFont: ['PT Serif', 'serif']
      }
    }
  },
  plugins: []
}
export default config
