module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
      },
      colors: {
        red: {
          50: "#f9ebea",
          100: "#fcdfd8",
          200: "#fabfb0",
          300: "#f79f89",
          400: "#f57f61",
          500: "#f25f3a",
          600: "#c24c2e",
          700: "#913923",
          800: "#612617",
          900: "#30130c",
        },
        blue: {
          50: "#e8f0f8",
          100: "#d3d5dc",
          200: "#a7abba",
          300: "#7c8197",
          400: "#505775",
          500: "#242d52",
          600: "#1d2442",
          700: "#161b31",
          800: "#0e1221",
          900: "#070910",
        },
      },
    },
    plugins: [],
  },
};
