// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  runtimeConfig: {
    aaa: 100,
    public: {
      bbb: 200,
      apiBase: "http://www.jd.com",
    },
  },
});
