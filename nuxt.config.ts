// vuetifyの参考文献 https://qiita.com/mml/items/9936471c551ee3f15218
export default defineNuxtConfig({
  app: {
    head: {
      title: "遊坊ら | ASOBORA",
      // meta: [
      //   { name: "viewport", content: "width=device-width, initial-scale=1" },
      // ],
    },
  },
  css: ["vuetify/lib/styles/main.sass", "mdi/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
