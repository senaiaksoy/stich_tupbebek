import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "surface-container-low": "#f1f4f6",
        "secondary-fixed": "#d6e4f5",
        "tertiary-dim": "#285c53",
        "primary-dim": "#285582",
        "tertiary-fixed": "#c8fff2",
        "surface": "#f8f9fa",
        "surface-container-high": "#e3e9ec",
        "on-secondary": "#f6f9ff",
        "inverse-surface": "#0c0f10",
        "secondary": "#53606f",
        "on-tertiary-container": "#31645b",
        "primary-fixed-dim": "#b9d7ff",
        "inverse-primary": "#92bcf0",
        "tertiary-container": "#c8fff2",
        "on-secondary-container": "#455361",
        "on-error": "#fff7f6",
        "primary-container": "#d2e4ff",
        "outline-variant": "#abb3b7",
        "secondary-container": "#d6e4f5",
        "tertiary-fixed-dim": "#baf0e4",
        "secondary-fixed-dim": "#c7d6e7",
        "error-container": "#fe8983",
        "background": "#f8f9fa",
        "inverse-on-surface": "#9b9d9e",
        "surface-tint": "#35618f",
        "error-dim": "#4e0309",
        "surface-variant": "#dbe4e7",
        "tertiary": "#35685e",
        "on-primary-container": "#275482",
        "secondary-dim": "#475563",
        "surface-bright": "#f8f9fa",
        "on-primary": "#f5f7ff",
        "on-tertiary": "#e3fff7",
        "on-tertiary-fixed-variant": "#3c6f65",
        "outline": "#737c7f",
        "primary": "#35618f",
        "error": "#9f403d",
        "on-tertiary-fixed": "#1d5249",
        "on-primary-fixed-variant": "#325e8c",
        "on-surface-variant": "#586064",
        "primary-fixed": "#d2e4ff",
        "surface-container-highest": "#dbe4e7",
        "on-surface": "#2b3437",
        "on-error-container": "#752121",
        "on-secondary-fixed": "#33414e",
        "on-secondary-fixed-variant": "#4f5d6b",
        "surface-container-lowest": "#ffffff",
        "on-background": "#2b3437",
        "on-primary-fixed": "#0d416e",
        "surface-container": "#eaeff1",
        "surface-dim": "#d1dce0",
        "accent": "#8a6d2b",
        "accent-light": "#c5a059"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#586064',
            '--tw-prose-headings': '#2b3437',
            '--tw-prose-links': '#35618f',
            '--tw-prose-bold': '#2b3437',
            '--tw-prose-counters': '#35618f',
            '--tw-prose-bullets': '#35618f',
            '--tw-prose-quotes': '#2b3437',
            '--tw-prose-quote-borders': '#35618f',
            '--tw-prose-hr': '#abb3b7',
            'h2': {
              borderLeft: '4px solid #35618f',
              paddingLeft: '1rem',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
            },
            'h3': {
              marginTop: '2rem',
              marginBottom: '0.75rem',
              color: '#35618f',
            },
            'h4': {
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
            'p': {
              lineHeight: '1.85',
              marginBottom: '1.25rem',
            },
            'li': {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            'blockquote': {
              borderLeftColor: '#35618f',
              backgroundColor: 'rgba(53, 97, 143, 0.04)',
              padding: '1rem 1.5rem',
              borderRadius: '0 0.75rem 0.75rem 0',
              fontStyle: 'italic',
            },
            'a': {
              fontWeight: '600',
              textDecorationColor: '#35618f',
              textUnderlineOffset: '3px',
            },
            'a:hover': {
              color: '#285582',
            },
            'img': {
              borderRadius: '1rem',
            },
            'table': {
              fontSize: '0.9rem',
            },
            'th': {
              backgroundColor: 'rgba(53, 97, 143, 0.06)',
              padding: '0.75rem 1rem',
            },
            'td': {
              padding: '0.75rem 1rem',
            },
          },
        },
      }),
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
    },
  },
  plugins: [typography],
}
