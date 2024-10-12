import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-light-blue': '0 1px 6px -1px rgba(195, 228, 255, 0.5), 0 2px 4px -1px rgba(195, 228, 255, 0.3)', // Shadow using #C3E4FF
      },
      colors: {
        background: "var(--background)", // Light theme background
        foreground: "var(--foreground)", // Light theme foreground
        "dream-green": "#D7FF7B",
        "dream-blue": "#4D61F4",
        "dream-white": "#D0EEF9", 
        "dream-purple": "#CC88FF",
        "dream-black": "#1E1E1E",
        "dream-state": "#FF1723",
        "dream-canada": "#12CBE5",
        "dream-uk": "#2EA857",
        "dream-state-bg": "#FFF3F0",
        "dream-canada-bg": "#ECFBFD",
        "dream-uk-bg": "#E6FAED",
        "dream-gray": "#90919C",
        "dream-bg": "#FAFDF3",
        "dream-bg-green": "#D7FF7B80",  
        "dream-ba": "#90919C",  
        "dream-ba-bg": "#F7F7F7",  
        "dream-ma": "#976A00",  
        "dream-ma-bg": "#FEE199", 
        "dream-hi": "#6405AB", 
        "dream-hi-bg": "#DECBFD", 
        "dream-di": "#39B44A", 
        "dream-di-bg": "#D7FF7B", 
        "dream-btn-bg": "#CFFF5F", 
        'custom-gradient-top': '#D7FF7B', // Start color
        'custom-gradient-bottom': '#F2FFD4',   // End color
      },
      screens: {
        'custom': { 'raw': '(min-width: 1024px) and (max-width: 1366px)' }, 
        'custom1': { 'raw': '(min-width: 1280px) and (max-width: 1366px)' }, 
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #D7FF7B 0%, #F2FFD4 100%)',
      },
      rotate: {
        '40': '40deg', 
        'sm': '-23deg',
        '-50': '-50deg', 
        '90': '90deg', 
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      fontFamily: {
        Figtree: ['Figtree', 'sans-serif'],
      },
      fontSize: {
        'lg': '48px',
        'md': '2rem',
        'sm': '1rem',
      },
      borderRadius: {
        'custom-lg': '60px', 
        'custom-md': '32px', 
        'custom-sm': '17px', 
        'custom-ssm': '10px', 
      },
    },
  },
  plugins: [],
};

export default config;
