<template>
  <v-btn
    type="button"
    :color="primary ? 'primary' : undefined"
    @click="emit('click')"
    :variant="variant"
    :size="size"
    >{{ label }}</v-btn
  >
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  label: string;
  primary?: boolean;
  size?: "x-small" | "small" | "regular" | "large" | "x-large";
}>();

const emit = defineEmits<{ (e: "click"): void }>();

const variant = computed(() => (props.primary ? "flat" : "outlined"));
</script>
