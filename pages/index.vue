<script setup lang="ts">
import { headerMenu } from "~~/src/utils/list";
</script>

<template>
  <div>
    <img
      class="top-pic"
      src="~/assets/images/asobora-top.jpg"
      alt="asobora-top"
    />
    <ul v-for="(menu, i) in headerMenu" :key="i">
      <v-card
        v-if="menu.title !== 'Contact'"
        class="index-card"
        :title="menu.title"
      />
    </ul>
  </div>
</template>

<style scoped>
.top-pic {
  width: 100%;
}

.index-card {
  margin: 20px;
}
</style>
