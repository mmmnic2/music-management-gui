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
        foreground: "var(--foreground)",
        primary: "#413F8A",
        secondary: "#553769",
        actions: "#D277BD",
        hoverColor: "#BCA2E7",
        textPrimary: "#413F8A",
        inputColor: "#7C58AA",
        "text-secondary": "#c8c8c8"
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
      backgroundImage: {
        'music-gradient': 'linear-gradient(to right, #413F8A, #553769)',
        'primary-gradient': 'linear-gradient(to bottom, #413F8A, #553769)',
        'secondary-gradient': 'linear-gradient(to bottom, #BCA2E7, #7C58AA)',
        'genre-btn': 'linear-gradient(120deg, #ddb6f7, #611395)',
      },
      boxShadow: {
        'custom': 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px',
      },
    },
  },
  plugins: [],
};
