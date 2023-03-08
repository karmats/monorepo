<template>
  <v-app>
    <v-main>
      <HelloWorld />
      <AppvaButton size="s">Hello monorepo</AppvaButton>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { AppvaButton } from "@karmats/vue-lib";
</script>
