import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue500: "var(--blue500)",
        blue400: "var(--blue400)",
        blue200: "var(--blue200)",
        blue100: "var(--blue100)",
        neutral100: "var(--neutral100)",
        error400: "var(--error400)",
        green400: "var(--green400)",
        green100: "var(--green100)",
      },
    },
  },
  plugins: [],
} satisfies Config;
