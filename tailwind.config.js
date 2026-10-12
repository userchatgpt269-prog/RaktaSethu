/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rakt: {
          charcoal: '#1E293B',
          red: '#DC2626',
          crimson: '#E11D48',
          pill: '#EF4444',
          pillBg: '#FEF2F2',
          pillBorder: '#FCA5A5',
          alert: '#B91C1C',
          darkRed: '#991B1B',
          bg: '#F9FAFB',
          card: '#FFFFFF',
          border: '#E5E7EB',
          subtle: '#F3F4F6',
          muted: '#6B7280',
          textDark: '#111827',
          textBody: '#374151',
          govNavy: '#1E3A8A',
          govOrange: '#EA580C',
          govGreen: '#15803D',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        hover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.08)',
        modal: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
