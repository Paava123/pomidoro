
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },

        focus: {
          400: "#38bdf8",
          500: "#0ea5e9",
        },

        success: {
          400: "#4ade80",
          500: "#22c55e",
        },

        warning: {
          400: "#facc15",
          500: "#eab308",
        },

        danger: {
          400: "#f87171",
          500: "#ef4444",
        },
      },

      borderRadius: {
        "5xl": "2.5rem",
      },

      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.25)",
        glow: "0 0 25px rgba(56,189,248,0.25)",
      },

      transitionDuration: {
        250: "250ms",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
}