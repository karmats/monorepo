<template>
  <button
    class="btn"
    :class="{ 'btn-large': size === 'l', 'btn-small': size === 's' }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import { colors } from "@karmats/fundamentals/colors";
defineProps<{ size: "l" | "s" }>();
</script>
<style scoped>
.btn {
  background-color: v-bind(colors.primary[70].value);
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.btn.btn-large {
  padding: 16px 32px;
}
</style>
