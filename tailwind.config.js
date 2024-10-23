/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        onSurface: "var(--onSurface)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        surface: "var(--surface)",
        onPrimary: "var(--onPrimary)",
        accent: "var(--accent)",

      },
      padding:{
        navBarPadding:"var(--navBarPadding)"
      }
    },
  },
  plugins: [],
};
