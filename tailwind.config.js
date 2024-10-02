/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: { sans: ['"Outfit", sans-serif'] },
    extend: {
      colors: {
        primary: {
          500: "#465FFF",
          600: "#3641f5",
        },
        secondary: {
          200: "#667085",
          300: "#344054",
          500: "#1D2939",
        },
        "theme-gray": {
          100: "#D0D5DD",
          200: "#E4E7EC",
          300: "#F9FAFB",
          400: "#98A2B3",
          500: "#F2F4F7",
        },
        error: {
          100: "#FEF3F2",
          500: "#B42318",
        },
        success: {
          100: "#ECFDF3",
          500: "#027A48",
        },
        "theme-orange": {
          500: "#FD853A",
        },
      },
      boxShadow: {
        "custom-xs": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
