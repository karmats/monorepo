<template>
  <v-app :theme="theme">
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
