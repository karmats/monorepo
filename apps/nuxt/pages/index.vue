<template>
  <h1>Hello {{ welcome }}!</h1>
  <input v-model="welcome">
</template>

<script setup lang="ts">
const welcome = ref("world");
</script>
