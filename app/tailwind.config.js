/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Apple design tokens as Tailwind colors
        apple: {
          blue: "#0071e3",
          "blue-dark": "#2997ff",
          "blue-hover": "#0077ed",
          gray: "#86868b",
          "gray-dark": "#a1a1a6",
          surface: "#f5f5f7",
          "surface-dark": "#1c1c1e",
          text: "#1d1d1f",
          "text-dark": "#f5f5f7",
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Display',
          'SF Pro Text',
          'Noto Sans SC',
          'sans-serif',
        ],
      },
      fontSize: {
        hero: ['clamp(3.5rem, 7vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '600' }],
        headline: ['clamp(2.5rem, 4vw, 3rem)', { lineHeight: '1.08', letterSpacing: '-0.012em', fontWeight: '600' }],
        title: ['1.75rem', { lineHeight: '1.14', letterSpacing: '-0.008em', fontWeight: '600' }],
        'body-large': ['1.3125rem', { lineHeight: '1.52', letterSpacing: '0' }],
        body: ['1.0625rem', { lineHeight: '1.59', letterSpacing: '0' }],
        caption: ['0.875rem', { lineHeight: '1.43', letterSpacing: '0' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        card: "0 2px 16px 0 rgba(0,0,0,0.06)",
        "card-hover": "0 8px 32px 0 rgba(0,0,0,0.10)",
        "nav": "0 1px 0 0 rgba(0,0,0,0.08)",
      },
      maxWidth: {
        content: "980px",
        wide: "1200px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
