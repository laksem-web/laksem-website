/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        popins: "Poppins, sans-serif",
        Mullish: "Mulish, sans-serif;",
      },
    },
  },
  plugins: [],
};
