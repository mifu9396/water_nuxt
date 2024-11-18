<template>
  <div>
    <h1>根組件</h1>
    <nuxt-link to="/">首頁</nuxt-link>
    <nuxt-link to="/users">用戶默認</nuxt-link>
    <nuxt-link to="/users/create-or-edit">用戶添加或更新</nuxt-link>
    <nuxt-link to="/roles/admin">角色-管理員</nuxt-link>
    <nuxt-link to="/roles/normal">角色-普通用戶</nuxt-link>
    <nuxt-link to="/about">關於</nuxt-link>
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->
    <nuxt-page></nuxt-page>
    <button @click="callAPI">api</button>
  </div>
</template>
<script setup lang="ts">
useHead({
  // title: "這是app根組件",

  titleTemplate: (chunk) => {
    return chunk ? `${chunk} - 水哥澎湃 ` : "水哥澎湃";
  },
  script: [
    {
      src: "https://code.jquery.com/jquery-3.7.1.min.js",
    },
  ],
});

function callAPI() {
  useFetch("https://jsonplaceholder.typicode.com/posts", {
    method: "post",
    body: { age: 1 },
  })
    .then((res) => {
      console.log("請求成功", res);
    })
    .catch((err) => {
      console.log(err);
    });
}

const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.aaa);
console.log(runtimeConfig.public.bbb);
console.log(runtimeConfig.public.apiBase);
</script>

<style scoped lang="scss">
a {
  margin-right: 10px;
}
</style>
