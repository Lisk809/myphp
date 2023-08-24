import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Lisk",
  description: "不知名业余程序员",
  head: [
    ["link", { rel: "preconnect", href: "https://unpkg.com" }],
    ["link", { rel: "dns-prefetch", href: "https://unpkg.com" }],
    ["link", { rel: "icon", type: "image/png", href: "/lisk.png" }],
    ["script", { src: "https://unpkg.com/twemoji@latest/dist/twemoji.min.js" }],
  ],
  lastUpdated: true,
  markdown: {
    theme: "one-dark-pro",
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/lisk.png",
    nav: [
      { text: "文档", link: "/intro" },
      {
        text: "找我",
        items: [
          {
            items: [
              { text: "GitHub", link: "https://github.com/Lisk809" },
              {
                text: "QQ",
                link: "https://qm.qq.com/cgi-bin/qm/qr?k=z_MhzXU1RM0HEnIOBmXiERGNuDxpHglV&noverify=0",
              },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        text: "getStarted",
        collapsible: true,
        items: [{ text: "简介", link: "/intro" }],
      },
      {
        text: "apis",
        collapsible: true,
        items: [{ text: "JS中的==和===", link: "/blog/compare" }],
      },
    ],
    outline: 2,
    outlineTitle: "大纲",
    socialLinks: [{ icon: "github", link: "https://github.com/Lisk809/Lisk" }],
    footer: {
      message:
        '<a href="https://github.com/Lisk809/Lisk">文档</a>使用 <a href="https://github.com/KiviBotLab/docs/blob/main/LICENSE">MIT</a> 协议开放源代码\nPower by <a href="https://vitepress.docschina.org/">VitePress</a><br>The website is deployed using <a href="https://vercel.com">vercel</a>.',
      copyright:
        'Copyright © 2022-PRESENT <a href="https://github.com/Lisk809">Lisk</a>',
    },
    lastUpdatedText: "上次更新",
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    editLink: {
      pattern: "https://github.com/Lisk809/myphp/edit/main/:path",
      text: "在 GitHub 上编辑",
    },
  },
});
