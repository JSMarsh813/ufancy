/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customPrimary: "rgb(217, 1, 102)", //logoicon color, some buttons, pink
        customSecondary: "rgb(161, 163, 247)",
        gold: "rgb(255, 215, 0)",
        customDarkBg1: "rgb(255,255,255)",
        customDarkBg2: "rgb(217, 1, 102)", //background pink
        customDarkBg3: "rgb(255,255,255)",
        customAccent: "rgb(211,181,	101)",
        customDarkBg3Hover: "rgb(222,205,160)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(217, 0, 88, 0.8)", //navbar background

        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
    },
  },
};
