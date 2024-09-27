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
        background: "var(--background)",
        foreground: "var(--foreground)",
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
        
        
      },
      rotate: {
        '40': '40deg', 
        '-50': '-50deg', 
        '90': '90deg', 
      },
      fontFamily: {
        Figtree: ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
