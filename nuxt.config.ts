// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr     : false,
  devtools: { enabled: true },
  app     : {
    head: {
      charset: 'utf-8',
      title  : '特訓5/engbody',
      meta   : [
        { name: 'theme-color', content: '#1C4AC9' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:image', content: '/ogp.png' },
        { property: 'og:type', content: 'article' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel : "stylesheet",
          href:"https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap",
        },
      ],
    },
  },
  css: [
    'modern-css-reset/dist/reset.min.css',
    '~/assets/scss/base.scss',
  ],
  components: {
    global: true,
    dirs  : ['~/components'],
  },
})