<script setup lang="ts">
import { headerMenu } from "~~/src/utils/list";

const drawer = ref(false);
</script>

<template>
  <v-app-bar flat color="transparent">
    <v-row no-gutters justify="space-around" align-content="center">
      <v-col align-self="center" cols="3">
        <img
          class="logo"
          src="~/assets/images/asobora-logo.png"
          alt="asobora-logo"
        />
      </v-col>
      <v-col align-self="center" cols="7" class="d-flex justify-end">
        <div class="header-menu-item">
          <v-btn v-for="(item, i) in headerMenu" :key="i" :href="item.link">
            <div class="header-menu-mikan-icon">
              <MikanIcon />
            </div>
            {{ item.title }}
          </v-btn>
        </div>
        <MikanIcon
          class="mikan-menu"
          variant="text"
          @click.stop="drawer = !drawer"
        />
      </v-col>
    </v-row>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list :items="headerMenu"></v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
@media (max-width: 725px) {
  .v-toolbar__content {
    min-height: 70px;
  }
}
@media (min-width: 725px) {
  .v-toolbar__content {
    min-height: 100px;
  }
}

@media (min-width: 900px) {
  .v-toolbar__content {
    min-height: 140px;
  }
}
</style>

<style scoped lang="scss">
header {
  width: 100%;
}
.logo {
  padding-top: 20px;
  width: 80%;
}
.v-btn--size-default {
  padding: 0;
}
.header-menu-mikan-icon {
  margin-right: 2px;
}
@media (min-width: 725px) {
  .mikan-menu {
    display: none;
  }
  .header-menu-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}
@media (max-width: 725px) {
  .mikan-menu {
    display: block;
  }
  .header-menu-item {
    display: none;
  }
}
</style>
