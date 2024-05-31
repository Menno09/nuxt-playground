// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  routeRules: {
    "/pages/games/skills/**": { ssr: false },
  },

  typescript: {
    typeCheck: true
  }
})