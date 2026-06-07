module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        lime: '#CCFF00',
        'lime-dark': '#b3e600',
        'lime-light': '#e6ff66',
        muted: '#666666',
        'muted-foreground': '#999999',
        card: '#1a1a1a',
        'card-hover': '#242424',
        border: '#2a2a2a',
        accent: '#CCFF00',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'lime-glow': 'radial-gradient(circle, rgba(204, 255, 0, 0.15) 0%, rgba(204, 255, 0, 0.05) 50%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
