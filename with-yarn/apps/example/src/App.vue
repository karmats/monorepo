<template>
  <v-app>
    <v-main>
      <AppvaButton size="s">Hello monorepo</AppvaButton>
      <p>x: {{ x }}, y: {{ y }}</p>
      <!-- <h2 class="text-h6">Appva icons</h2>
      <ul>
        <li v-for="icon in appvaIcons" :key="icon.name">
          {{ icon.name }}
          <v-icon :color="colors.primary[70].value" :icon="icon.value"></v-icon>
        </li>
      </ul> -->
      <!-- <h2 class="text-h6">Material icons</h2>
      <ul>
        <li v-for="icon in materialIcons" :key="icon.name">
          {{ icon.name }}
          <v-icon :color="colors.primary[70].value" :icon="icon.value"></v-icon>
        </li>
      </ul> -->
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { AppvaButton, useMouse } from "@karmats/vue-lib";
import { colors } from "@karmats/fundamentals/colors";
import { mdiAbTesting } from "@karmats/fundamentals/dist/icons";
import { SOME_CONST } from '@karmats/fundamentals';
// import { computed } from "vue";

const { x, y } = useMouse();
console.log(colors);
console.log(mdiAbTesting);

// const appvaIcons = computed(() => {
//   const keys = Object.keys(icons.appva) as (keyof typeof icons.appva)[];
//   return keys.reduce(
//     (acc, c) => acc.concat({ name: c, value: icons.appva[c] }),
//     [] as { name: string; value: string }[]
//   );
// });
// const materialIcons = computed(() => {
//   const keys = Object.keys(icons.material) as (keyof typeof icons.material)[];
//   return keys.reduce(
//     (acc, c) => acc.concat({ name: c, value: icons.material[c] }),
//     [] as { name: string; value: string }[]
//   );
// });
</script>
