<script setup lang="ts"></script>

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
