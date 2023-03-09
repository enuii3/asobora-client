<script setup lang="ts">
import { Header } from "~~/src/features/Header";
import { Footer } from "~~/src/features/Footer";
</script>

<template>
  <v-layout>
    <Header />
    <v-main>
      <slot />
      <Footer />
    </v-main>
  </v-layout>
</template>

<style scoped>
main {
  padding: 0;
}
</style>
