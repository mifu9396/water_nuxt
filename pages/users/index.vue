<template>
  <div>user默認</div>
  <my-components></my-components>
  <xxx></xxx>
  <users-dialog></users-dialog>
</template>

<script setup lang="ts">
import myComponents from "./myComponents.vue";

useHead({
  title: "用戶首頁",
});
</script>

<style scoped></style>
