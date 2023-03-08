<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <AppvaButton size="s">Hello monorepo</AppvaButton>
      <p>x: {{ x }}, y: {{ y }}</p>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { AppvaButton, useMouse } from "@karmats/vue-lib";

const { x, y } = useMouse();
</script>
