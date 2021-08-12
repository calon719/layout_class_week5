module.exports = {
  purge: {
    enabled: false,
    content: ["./app/**/*.html", "./app/assets/style/**/*.scss", "./app/**/*.ejs"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      success: "#198754",
      danger: "#DC3545",
      dark: "#000",
      white: "#fff",
      "gray-100": "#F8F9FA",
      "gray-300": "#DCDCDC",
      "gray-400": "#CED4DA",
      "gray-600": "#6C757D",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem !important",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "3rem",
      "8xl": "3.5rem",
      "9xl": "4rem",
      "10xl": "4.5rem",
    },
    extend: {
      width: {
        35: "8.75rem",
        75: "18.5rem",
        120: "30rem",
      },
      height: {
        35: "8.75rem",
        "vh-full": "100vh",
      },
      borderRadius: {
        circle: "50%",
      },
      zIndex: {
        max: "999",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
