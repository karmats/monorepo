<template>
  <AppvaButton @click="count++" size="l"
    >You clicked me {{ count }} times.</AppvaButton
  >
</template>

<script lang="ts" setup>
import AppvaButton from "./AppvaButton.vue";
import { ref } from "vue";

const count = ref(0);
</script>
