<script setup lang="ts">
import { useDisplay } from "vuetify/lib/framework.mjs";
import { headerMenu } from "~~/src/utils/list";

const drawer = ref(false);
const display = useDisplay();
console.log(display.name);
</script>

<template>
  <v-app-bar flat color="transparent">
    <v-toolbar-title class="logo">遊坊ら | ASOBORA</v-toolbar-title>

    <template v-slot:append>
      <v-btn
        v-for="(item, i) in headerMenu"
        :key="i"
        class="header-menu-item"
        variant="plain"
        :href="item.link"
        color="#FFFFFF"
      >
        <div class="header-menu-mikan-icon">
          <MikanIcon />
        </div>
        {{ item.title }}
      </v-btn>

      <MikanIcon
        class="mikan-menu"
        variant="text"
        @click.stop="drawer = !drawer"
      />
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list :items="headerMenu"></v-list>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
header {
  width: 100%;
}
.logo {
  color: white;
  font-weight: bold;
}
.v-btn--size-default {
  padding: 0;
}
.header-menu-mikan-icon {
  margin-right: 2px;
  padding-left: 20px;
}
@media (min-width: 540px) {
  .mikan-menu {
    display: none;
  }
  .header-menu-item {
    display: block;
  }
}
@media (max-width: 540px) {
  .mikan-menu {
    display: block;
  }
  .header-menu-item {
    display: none;
  }
}
</style>
