/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "variable-collection-background": "var(--variable-collection-background)",
        "variable-collection-nav-bar": "var(--variable-collection-nav-bar)",
        "variable-collection-text": "var(--variable-collection-text)",
        white: "var(--white)",
      },
      fontFamily: {
        "body-body-06": "var(--body-body-06-font-family)",
        "body-body-21": "var(--body-body-21-font-family)",
        "body-body-22": "var(--body-body-22-font-family)",
        "body-body-23": "var(--body-body-23-font-family)",
        "heading-heading-04": "var(--heading-heading-04-font-family)",
        "heading-heading-09": "var(--heading-heading-09-font-family)",
        "heading-heading-24": "var(--heading-heading-24-font-family)",
        "semi-semi-bold-20": "var(--semi-semi-bold-20-font-family)",
      },
    },
  },
  plugins: [],
};
