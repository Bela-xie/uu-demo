module.exports = {
  // base: "BelaXie/uu-demo",
  title: "UU 框架",
  description: "一个基于 Vue 的 UI 框架，非常好用",
  themeConfig: {
    nav: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "文档",
        link: "/introduction/",
      },
      {
        text: "Github",
        link: "https://google.com",
      },
    ],
    sidebar: [
      {
        title: "入门",
        collapsable: false,
        children: ["/introduction/", "/install/", "/get-started/"],
      },
      {
        title: "组件",
        collapsable: false,
        sidebarDepth: 0, //侧边栏显示的深度，默认为1
        children: ["/components/button", "/components/grid", "/components/input", "/components/layout", "/components/popover", "/components/tabs", "/components/toast", "/components/collapse"],
      },
    ],
  },
};
