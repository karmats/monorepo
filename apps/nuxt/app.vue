<script setup lang="ts">
const router = useRouter();
const nav = [
  { label: "Home", to: "/" },
  { label: "Example (index)", to: "/example" },
  { label: "Example (a)", to: "/example/a" },
  { label: "Vuetify", to: "/vuetify" },
  // {
  //   label: "Keyed child",
  //   onClick: () =>
  //     router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`),
  // },
  // {
  //   label: "Non-Keyed child",
  //   onClick: () =>
  //     router.push(`/parent/static-${(Math.random() * 100).toFixed()}`),
  // },
];
</script>
<template>
  <div>
    <NuxtExample dir="routing/pages" :nav="nav" current-route>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtExample>
    <NuxtPage />
  </div>
</template>
