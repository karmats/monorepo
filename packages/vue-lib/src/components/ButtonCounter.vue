<template>
  <AppvaButton @click="count++" :size="size"
    >You clicked me {{ count }} times.</AppvaButton
  >
</template>

<script lang="ts" setup>
import AppvaButton from "./AppvaButton.vue";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{ size: "l" | "s"; initialCount: number }>(),
  {
    size: "l",
    initialCount: 0,
  }
);

const count = ref(props.initialCount);
</script>
