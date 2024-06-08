import { link } from "fs";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Tipps",
  description: "Share your tips and tricks!",

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
    ],
  },
});
