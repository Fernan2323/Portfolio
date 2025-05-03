import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "verde-title": "rgba(0, 255, 0, 1)",
        "negro-claro": "rgba(23, 22, 22, 1)",
        "amarillo-texto": "rgba(220, 245, 31, 1)"
      },
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},

      fontFamily: {
        matrix: ['VT323', 'monospace'],
        ibm: ["IBM Plex Mono", "monospace"],
      }
    },
  },
  plugins: [],
};

export default config;