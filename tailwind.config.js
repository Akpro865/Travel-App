/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./comps/Layout.js",
   "./comps/Header.js",
   "./comps/Footer.js",
   "./pages/hero.js",
   "./pages/index.js",
   "./comps/Adventures.js",
   "./comps/About.js",
   "./comps/Landscapes.js",
   "./comps/Products.js",
   "./comps/Packages.js",
   "./comps/Services.js",
   "./comps/Reviews.js",
   "./comps/Blogs.js",
   "./comps/Logo.js",
   "./comps/Subscribe.js"
  ],
  theme: {
    extend: {
      width: {
        "side": "23rem",
        "120": "50rem",
        "76": "19rem",
        "500": "33rem"
      },
      backgroundImage: {
        "bg1": "url('/home-bg-1.jpg')",
        "bg2": "url('/home-bg-2.jpg')",
        "bg3": "url('/home-bg-3.jpg')",
      },
      colors: {
        "light": "#f1f3f4",
        "lightblue": "#F0F8FF"
      }
    },
  },
  plugins: [],
}
