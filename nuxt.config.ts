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
    //参考文献 https://note.com/aliz/n/nacb19618cdf4
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_variables.scss" as *;',
        },
      },
    },
  },
});
