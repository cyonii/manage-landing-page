module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        // xxl: "1400px",
      },
      colors: {
        black: "#000000",
        white: "#ffffff",
        yellow: "#f3c000",
        darkGreen: "#006400",
      },
    },
    plugins: [],
  },
};
