/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Bleu principal
        secondary: "#F8FAFC", // Gris très clair
        accent: "#059669", // Vert succès
        dark: "#0F172A", // Couleur foncée/noire
        darkBlue: "#1E3A8A", // Bleu foncé
        lightBlue: "#DBEAFE", // Bleu clair
        text: {
          primary: "#1F2937", // Gris foncé
          secondary: "#6B7280", // Gris moyen
          light: "#F8FAFC", // Texte clair pour fonds foncés
        },
        background: "#FFFFFF", // Blanc
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: [
          "3.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "h1-mobile": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h2: [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "h2-mobile": [
          "2rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.5" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
