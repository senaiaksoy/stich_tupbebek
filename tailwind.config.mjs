/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Enforced 8px base spacing scale
      spacing: {
        'xs': '0.25rem',   // 4px
        'sm': '0.5rem',    // 8px (base unit)
        'md': '1rem',      // 16px (standard gap)
        'lg': '1.5rem',    // 24px (comfortable)
        'xl': '2rem',      // 32px (spacious / section padding desktop)
        '2xl': '2.5rem',   // 40px (hero horizontal padding)
        '3xl': '3rem',     // 48px (touch target / section separator)
        '4xl': '4rem',     // 64px (major section gap)
        '5xl': '5rem',     // 80px (section vertical padding)
        '6xl': '6rem',     // 96px (major section vertical padding)
      },
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
        "surface-dim": "#d1dce0"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      },
      // Fluid typography scales (responsive, no breakpoint jumps)
      fontSize: {
        // Hero headlines: clamp(min, viewport-based, max)
        "hero": ["clamp(2.5rem, 8vw, 4.5rem)", { lineHeight: "1.1", fontWeight: "700" }],
        "hero-lg": ["clamp(3rem, 10vw, 6rem)", { lineHeight: "1.1", fontWeight: "700" }],
        // Section headings: slightly less aggressive
        "section": ["clamp(1.75rem, 4vw, 2.5rem)", { lineHeight: "1.2", fontWeight: "600" }],
        "section-lg": ["clamp(2rem, 5vw, 3rem)", { lineHeight: "1.2", fontWeight: "600" }]
      },
      borderRadius: {
        "sm": "0.25rem",      // 4px
        "DEFAULT": "0.5rem",  // 8px - modern default (up from 2px)
        "lg": "0.75rem",      // 12px
        "xl": "1rem",         // 16px
        "2xl": "1.5rem",      // 24px
        "full": "2rem"        // 32px (up from 12px)
      },
      lineHeight: {
        "tight": "1.4",       // Headlines (was 1.2-1.3 default)
        "snug": "1.5",        // Subheads
        "DEFAULT": "1.65",    // Body (improved from ~1.5)
        "relaxed": "1.8",     // Long-form content
        "loose": "2"
      },
      letterSpacing: {
        "tighter": "-0.025em",
        "tight": "-0.0125em",
        "DEFAULT": "0",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em",
        "ultra": "0.2em"       // uppercase labels (was 0.15em)
      },
    },
  },
  plugins: [],
}
