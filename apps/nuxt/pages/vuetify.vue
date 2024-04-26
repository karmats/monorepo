<template>
  <h1 class="text-3xl">Vuetify page!</h1>
  <v-card class="mx-auto my-8" elevation="2" max-width="344">
    <v-card-item>
      <v-card-title>{{ title }}</v-card-title>

      <v-card-subtitle>This actually works with Vuetify</v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
    <v-card-actions>
      <v-btn variant="outlined" @click="handleButtonClick">Toggle title</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
const defaultText = "Vuetify card";
const title = ref(defaultText);
const handleButtonClick = () => {
  title.value =
    title.value === defaultText
      ? "Nice job with button, try again!"
      : defaultText;
};
</script>
