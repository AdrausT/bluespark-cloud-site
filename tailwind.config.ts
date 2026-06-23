import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080C18',
        panel: '#0D1221',
        card: '#101828',
        accent: {
          DEFAULT: '#3B82F6',
          cyan: '#22D3EE',
        },
        ink: '#E8EDF5',
        muted: '#8B98B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        glow: '0 0 28px rgba(59,130,246,0.52), 0 4px 16px rgba(59,130,246,0.28)',
        'glow-sm': '0 0 14px rgba(59,130,246,0.35)',
        'glow-cyan': '0 0 24px rgba(34,211,238,0.40)',
      },
      backgroundImage: {
        'gradient-spark': 'linear-gradient(135deg, #3B82F6, #22D3EE)',
      },
      maxWidth: {
        site: '1180px',
      },
    },
  },
  plugins: [],
}

export default config
