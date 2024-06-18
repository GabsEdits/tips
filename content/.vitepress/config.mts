import { link } from "fs";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gabs' Tips & Tricks",
  description: "A collection of tips and tricks for web development and more",
  lang: "en-US",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "Gabriel Cozma" }],
    ["meta", { name: "keywords", content: "web development, tips, tricks" }],
  ],

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Website", link: "https://gabs.eu.org" },
    ],
  },

  sitemap: {
    hostname: "https://gxbs.me/tips/",
  },
});