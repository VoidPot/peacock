import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ["BlackEcho", "sans-serif"],
        sans: ["AeronomicSans", "sans-serif"],
        serif: ["ArianeCoachella", "serif"],
        core: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
} satisfies Config;
