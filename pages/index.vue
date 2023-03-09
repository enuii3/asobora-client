<script setup lang="ts">
import { TopSlider } from "~~/src/features/Main";
import { headerMenu } from "~~/src/utils/list";
</script>

<template>
  <div>
    <TopSlider />

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
.index-card {
  margin: 20px;
}
</style>
