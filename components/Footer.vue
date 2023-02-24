<script setup lang="ts">
const snsList = [
  { text: "instagram", url: "https://www.instagram.com/asobora.jp" },
  { text: "youtube", url: "/" },
  { text: "twitter", url: "/" },
  { text: "facebook", url: "/" },
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
              <v-icon :icon="`mdi-${sns.text}`" />
            </template>

            <v-list-item-title v-text="sns.text" />
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
  max-height: 270px;
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
.sns-list {
  padding: 15px 20px 10px 20px;
}
.copy-right {
  margin-top: 10px;
  background-color: #e3f2fd;
  text-align: center;
  width: 100%;
}
</style>
