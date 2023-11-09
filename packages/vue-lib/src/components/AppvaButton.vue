<template>
  <button
    class="button"
    :class="{ 'button-large': size === 'l', 'button-small': size === 's' }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { colors } from "@karmats/fundamentals/colors";
defineProps<{ size: "l" | "s" }>();
</script>
<style scoped>
.button {
  background-color: v-bind(colors.primary[70].value);
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.button.button-large {
  padding: 16px 32px;
}
</style>
