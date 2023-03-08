<template>
  <button
    class="btn"
    :class="{ 'btn-large': size === 'l', 'btn-small': size === 's' }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
defineProps<{ size: "l" | "s" }>();
</script>
<style scoped>
.btn {
  background-color: #4caf50;
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
