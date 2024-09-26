// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/_vars.scss"; @import "@/assets/scss/_typography.scss";',
        },
      },
    },
  },
  css: ['normalize.css/normalize.css', '@/assets/scss/style.scss']
})