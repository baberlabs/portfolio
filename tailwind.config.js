/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        button_background: "var(--button-background)",
        button_text: "var(--button-text)",
        input_shadow: "var(--input-shadow)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
