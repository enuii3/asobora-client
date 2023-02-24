<script setup lang="ts">
const headerMenu = [
  { text: "About", link: "" },
  { text: "Blog", link: "" },
  { text: "News", link: "" },
  { text: "Shop", link: "" },
  { text: "Contact", link: "" },
];
</script>
<template>
  <v-app-bar app fixed color="#1E88E5">
    <v-app-bar-title text=" 遊坊ら | ASOBORA " class="logo" />

    <div
      v-for="(item, i) in headerMenu"
      :key="i"
      class="d-flex justify-space-between"
    >
      <v-btn variant="plain" :href="item.link" color="#FFFFFF">
        <img
          class="arida-mikan"
          width="24"
          height="24"
          src="~/assets/icon/arida-mikan.svg"
          alt="有田みかん"
        />
        {{ item.text }}</v-btn
      >
    </div>
  </v-app-bar>
</template>

<style scoped>
header {
  width: 100%;
  background-color: #64b5f6;
}
.logo {
  color: white;
  font-weight: bold;
}
.arida-mikan {
  padding-right: 5px;
}
</style>
