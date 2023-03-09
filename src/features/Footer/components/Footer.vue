<script setup lang="ts">
const snsList = [
  { title: "instagram", url: "https://www.instagram.com/asobora.jp" },
  { title: "youtube", url: "/" },
  { title: "twitter", url: "/" },
  { title: "facebook", url: "/" },
];
</script>

<template>
  <v-footer class="d-flex flex-column">
    <v-row
      class="footer-bar"
      align-content="center"
      justify="space-between"
      no-gutters
    >
      <v-col xs="6" class="footer-logo">
        <div>
          <h2>遊坊ら | ASOBORA</h2>
          <span style="text-align: center">made in wakayama</span>
        </div>
      </v-col>

      <v-col xs="6">
        <v-list bg-color="#BBDEFB" density="compact">
          <v-list-subheader>SNS</v-list-subheader>

          <v-list-item
            v-for="(sns, i) in snsList"
            :key="i"
            :value="sns"
            :href="sns.url"
            active-color="primary"
          >
            <template v-slot:prepend>
              <v-icon
                v-if="sns.title !== 'youtube'"
                :icon="`mdi-${sns.title}`"
              />
              <v-icon v-else icon="mdi-youtube-tv" />
            </template>

            <v-list-item-title v-text="sns.title" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <v-card class="copy-right">
      © 2020-{{ new Date().getFullYear() }} ASOBORA
    </v-card>
  </v-footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #90caf9;
  width: 100%;
}
.footer-bar {
  width: 100%;
}

.footer-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-list-item__prepend > .v-icon {
  margin-right: 5px;
}
.copy-right {
  margin-top: 10px;
  background-color: #e3f2fd;
  text-align: center;
  width: 100%;
}
</style>
