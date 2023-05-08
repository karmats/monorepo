<template>
  <AppvaButton @click="count++" :size="size"
    >You clicked me {{ count }} times.</AppvaButton
  >
</template>

<script lang="ts" setup>
import AppvaButton from "./AppvaButton.vue";
import { ref } from "vue";

defineProps<{ size: "l" | "s" }>();

const count = ref(0);
</script>
