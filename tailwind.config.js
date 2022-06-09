module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblack: "rgba(0,0,0, .6)",
      },
      gridTemplateRows: {
        customRow: "70px 1fr",
      },
      fontFamily: {
        popins: ["Popins"],
      },
    },
  },
  plugins: [],
};
