import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                scarlet: {
                    primary: '#C41E3A',
                    dark: '#8B0000',
                    light: '#FF6B6B',
                },
                gold: {
                    primary: '#D4AF37',
                    light: '#F4E4BC',
                    dark: '#B8860B',
                    shimmer: '#FFF8DC',
                },
                bg: {
                    primary: '#0A0A0A',
                    secondary: '#141414',
                    tertiary: '#1E1E1E',
                },
            },
            fontFamily: {
                display: ['var(--font-playfair)', 'serif'],
                sans: ['var(--font-montserrat)', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
            },
            fontSize: {
                'hero': 'clamp(48px, 8vw, 96px)',
                'section': '64px',
                'h3': '40px',
                'body-lg': '20px',
            },
            letterSpacing: {
                'hero': '-0.02em',
                'section': '-0.01em',
                'caption': '0.1em',
                'marquee': '0.3em',
            },
            backdropBlur: {
                'glass-1': '10px',
                'glass-2': '30px',
                'glass-3': '40px',
            },
            animation: {
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'border-rotate': 'border-rotate 4s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'roast': 'roast 10s ease-in-out infinite alternate',
            },
            keyframes: {
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'border-rotate': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                'roast': {
                    '0%': { backgroundColor: '#4A7C59' }, // Green
                    '50%': { backgroundColor: '#CCA55F' }, // Light Roast
                    '100%': { backgroundColor: '#3E2723' }, // Dark Roast
                },
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
        },
    },
    plugins: [],
};

export default config;
