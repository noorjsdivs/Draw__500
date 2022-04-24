module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", ".index.js", "App.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
