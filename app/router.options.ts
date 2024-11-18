import type { RouterConfig } from "@nuxt/schema";

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    ..._routes,
    {
      name: "xxx",
      path: "/xxx",
      component: () => import("@/pages/users/index.vue"),
    },
    {
      name: "yyy",
      path: "/yyy",
      component: () => import("@/pages/users/create-or-edit.vue"),
    },
    {
      name: "zzz",
      path: "/zzz",
      redirect: "/users",
    },
  ],
} satisfies RouterConfig;
