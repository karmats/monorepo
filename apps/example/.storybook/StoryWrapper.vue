<template>
  <v-app :theme="theme" :full-height="false" class="storybook-app">
    <v-main>
      <slot name="story"></slot>
    </v-main>
  </v-app>
</template>
<script lang="ts" setup>
defineProps<{
  theme: string;
}>();
</script>
<style scoped>
.storybook-app:deep(.v-application__wrap) {
  min-height: 10vh;
}
</style>
