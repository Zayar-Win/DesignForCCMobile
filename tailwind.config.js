module.exports = {
  content: [
    "./components/**/*.jsx",
    "./screens/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0092EF",
        secondary: "#003E66",
        black: "#232425",
        "black-gray": "#656565",
        "white-gray": "#EBEBEB",
        "white-gray-soft": "#F5F5F5",
        white: "#FFFFFF",
        yellow: "#FFB933",
        green: "#35CB00",
        red: "#EC272E",
        blueTransparent:
          "rgba(0, 146, 239, 0.15)",
        yellowTransparent:
          "rgba(255, 185, 51, 0.15)",
        greenTransparent:
          "rgba(53, 203, 0, 0.15)",
      },
      // fontSize: {
      //   "sm-3": "10px",
      //   "sm-2": "12px",
      //   sm: "14px",
      //   normal: "16px",
      //   lg: "18px",
      //   "lg-2": "20px",
      //   "lg-3": "24px",
      // }
    },
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};
