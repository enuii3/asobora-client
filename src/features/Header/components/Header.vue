<script setup lang="ts">
import HeaderActionItems from "./HeaderActionItems.vue";
import Logo from "./Logo.vue";
import { ref } from "vue";
import { headerMenu } from "~~/src/utils/list";
const drawer = ref(false);
const clickSideMenu = (value: boolean) => {
  drawer.value = value;
};
</script>

<template>
  <v-app-bar flat color="transparent">
    <v-row no-gutters justify="space-around" align-content="center">
      <v-col align-self="center" cols="3">
        <Logo />
      </v-col>
      <v-col align-self="center" cols="7" class="d-flex justify-end">
        <HeaderActionItems
          :header-menu="headerMenu"
          :drawer="drawer"
          @click-side-menu="clickSideMenu"
        />
      </v-col>
    </v-row>
  </v-app-bar>
  <HeaderSideMenu :drawer="drawer" />
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list :items="headerMenu"></v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
.v-toolbar__content {
  @include mini {
    min-height: 80px;
  }
  @include sp {
    min-height: 100px;
  }
  @include tab {
    min-height: 120px;
  }
  @include lap {
    min-height: 140px;
  }
}
</style>

<style scoped lang="scss">
header {
  width: 100%;
}
</style>
