// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/leaflet',
    '@nuxtjs/sanity',
    'nuxt-gtag',
  ],

  runtimeConfig: {
    public: {
      previewUrl: process.env.NUXT_SANITY_PREVIEW_URL,
    },
  },

  gtag: {
    id: 'G-01DSQHRD1Q',
  },

  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,

    useCdn: true,
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-03-15',

    visualEditing: {
      studioUrl:
        process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3333/admin',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },

  routeRules: {
    '/admin/**': {
      ssr: false,
    },
  },
});
