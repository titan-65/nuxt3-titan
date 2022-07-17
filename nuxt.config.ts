import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-graphql-client'],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://api-us-west-2.graphcms.com/v2/cl50bkoa30vzd01um2ieb3l9e/master' // overwritten by process.env.GQL_HOST
    }
  }
})
