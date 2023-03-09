<script setup lang="ts">
import { headerMenu } from "~~/src/utils/list";

defineProps<{ drawer: boolean }>();
</script>

<template>
  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list :items="headerMenu"></v-list>
  </v-navigation-drawer>
</template>

<style></style>
