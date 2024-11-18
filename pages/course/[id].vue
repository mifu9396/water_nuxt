<template>
  <h1>ID為{{ route.params.id }}的課程</h1>
</template>

<script setup lang="ts">
const route = useRoute();
console.log(route.params.id);
</script>

<style scoped></style>
