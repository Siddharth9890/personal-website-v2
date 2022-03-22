module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      navy:"#0a192f",
      lightNavy:"#112240",
      lightestNavy:"#233554",
      slate:"#8892b0",
      lightSlate:"#a8b2d1",
      lightestSlate:"#ccd6f6",
      white:"#e6f1ff",
      green:"#64ffda"
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@tailwindcss/aspect-ratio")
  ],
}