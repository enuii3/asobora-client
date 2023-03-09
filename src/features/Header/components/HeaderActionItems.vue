<script setup lang="ts">
import { OrangeIcon } from "~~/src/components/Element";
import { headerMenuType } from "~~/src/utils/list";

defineProps<{
  drawer: boolean;
  headerMenu: headerMenuType[];
}>();
const emits = defineEmits<{ (e: "click-side-menu", value: boolean): void }>();
</script>

<script lang="ts">
export default {
  name: "HeaderActionItems",
};
</script>

<template>
  <div style="width: 100%">
    <div class="header-menu-items">
      <v-btn v-for="(item, i) in headerMenu" :key="i" :href="item.link">
        <OrangeIcon class="mr-2" />
        {{ item.title }}
      </v-btn>
    </div>
    <div class="orange-menu">
      <OrangeIcon
        variant="text"
        @click.stop="emits('click-side-menu', !drawer)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.orange-menu {
  @include mini {
    display: flex;
    justify-content: end;
  }
  @include sp {
    display: flex;
    justify-content: end;
  }
  @include tab {
    display: none;
  }
}
.header-menu-items {
  @include mini {
    display: none;
  }
  @include sp {
    display: none;
  }
  @include tab {
    display: flex;
    justify-content: space-between;
  }
}
.v-btn--size-default {
  padding: 0;
}
</style>
