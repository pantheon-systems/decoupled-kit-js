module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  media: false,
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "Montserrat",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "'Noto Sans'",
        "sans-serif",
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ],
      serif: [
        "Merriweather",
        "Georgia",
        "Cambria",
        "'Times New Roman'",
        "Times",
        "serif",
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
