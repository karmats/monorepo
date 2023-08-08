<template>
  <v-app>
    <v-main>
      <AppvaButton size="s">Hello monorepo</AppvaButton>
      <ButtonCounter size="l" />
      <p>x: {{ x }}, y: {{ y }}</p>

      <div>
        <input placeholder="Cookie key" v-model="cookieKey" />
        <input placeholder="Cookie value" v-model="cookieValue" />
        <button type="button" @click="setCookie">Set Cookie</button>
      </div>

      <div v-for="(scale, name) in colors">
        <h2 class="text-h6">{{ name }}</h2>
        <ul>
          <li v-for="color in scale">
            <div
              :style="{
                backgroundColor: color.value,
                minWidth: '200px',
                minHeight: '40px',
              }"
            />
          </li>
        </ul>
      </div>
      <h2 class="text-h6">Appva icons</h2>
      <ul>
        <li v-for="icon in appvaIcons" :key="icon.name">
          {{ icon.name }}
          <v-icon :icon="icon.value"></v-icon>
        </li>
      </ul>
      <h2 class="text-h6">Material icons</h2>
      <ul>
        <li v-for="icon in materialIcons" :key="icon.name">
          {{ icon.name }}
          <v-icon :icon="icon.value"></v-icon>
        </li>
      </ul>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { colors } from "@karmats/fundamentals/colors";
import * as icons from "@karmats/fundamentals/icons";
import {
  AppvaButton,
  ButtonCounter,
  useMouse,
  useCookies,
} from "@karmats/vue-lib";
import { ref } from "vue";

const { x, y } = useMouse();
const cookies = useCookies();

const cookieKey = ref("");
const cookieValue = ref("");

const keys = Object.keys(icons) as (keyof typeof icons)[];
const appvaIcons = keys.reduce(
  (acc, c) =>
    c.startsWith("agi") ? acc.concat({ name: c, value: icons[c] }) : acc,
  [] as { name: string; value: string }[]
);

const materialIcons = keys.reduce(
  (acc, c) =>
    c.startsWith("mdi") ? acc.concat({ name: c, value: icons[c] }) : acc,
  [] as { name: string; value: string }[]
);

const setCookie = () => {
  if (cookieKey.value && cookieValue.value) {
    console.log("setting cookie", cookieKey.value, cookieValue.value);
    cookies.setCookie(cookieKey.value, cookieValue.value, {});
  }
};
</script>
