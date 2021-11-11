module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        lg: "508px",
        mobile: "95%"
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "rgba(255, 255, 255, 1)",
        black: "#000",
        button_disabled: "rgba(169, 140, 246, 1)",
        body: "rgba(251, 251, 251, 1)",
        border: "rgba(242, 242, 242, 1)",
        input_border: "rgba(232, 232, 232, 1)",
        select_bg: "rgba(244, 243, 248, 1)",
        success: "rgba(111, 174, 117, 1)",
        primary: {
          light: "rgba(67, 5, 235, 1)",
          DEFAULT: " rgba(44, 12, 106, 1)",
          dark: "rgba(135, 126, 158, 1)",
        },
        secondary: {
          light: "rgba(139, 143, 150, 1)",
          DEFAULT: "rgba(183, 183, 183, 1)",
          dark: "rgba(99, 97, 102, 1)",
          darker: "rgba(64, 64, 64, 1)",

        },
      },
      screens: {
        sm: { max: "700px" },
        md: { min: "701px", max: "1024px" },
        lg: { min: "1024px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
