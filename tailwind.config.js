module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lighter: "#65DE6F",
          DEFAULT: "#4ECE5F",
          darker: "#4CBD68",
        },
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        maskot: {
          primary: "#4ece5f",
          "primary-focus": "#4cbd68",
          "primary-content": "#ffffff",
          secondary: "#f000b8",
          "secondary-focus": "#bd0091",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-focus": "#2aa79b",
          "accent-content": "#ffffff",
          neutral: "#3d4451",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#1f2937",
          info: "#2094f3",
          success: "#4ece5f",
          warning: "#ff9900",
          error: "#ff5724",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
