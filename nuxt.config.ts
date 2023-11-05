export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    '~/assets/style.css'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        `/General/Between`
      ]
    }
  },
  app: {
    head: {
      charset: `utf-8`,
      viewport: `width=device-width, initial-scale=1`,
      title: `CPH Methods Builder`,
      meta: [
        // Page
        { name: `og:title`, content: `Streamer.bot CPH Methods Builder` },
        { name: `twitter:title`, content: `Streamer.bot CPH Methods Builder` },

        { name: `description`, content: `Build any Streamer.bot C# CPH method.` },
        { name: `og:description`, content: `Build any Streamer.bot C# CPH method.` },
        { name: `twitter:description`, content: `Build any Streamer.bot C# CPH method.` },

        // Website
        { name: `author`, content: `Ik1497` },
        { name: `theme-color`, content: `#2b9bed` },

        { name: `og:site_name`, content: `Streamer.bot CPH Methods Builder` },
        { name: `og:type`, content: `website` },
        { name: `og:image`, content: `https://streamer.bot/logo.png` },
        { name: `og:image:alt`, content: `The logo of Streamer.bot` },

        { name: `twitter:site`, content: `Streamer.bot CPH Methods Builder` },
        { name: `twitter:domain`, content: `cph-methods.vercel.app` },
        // { name: `twitter:card`, content: `summary` },
        // { name: `twitter:image`, content: `https://streamer.bot/logo.png` },
        
        // Misc
        { charset: `utf-8` },
        { name: `viewport`, content: `width=device-width, initial-scale=1` },
      ],
      link: [
        {
          rel: `stylesheet`,
          type: `text/css`,
          href: `https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.2.96/css/materialdesignicons.min.css`
        },
        {
          rel: `icon`,
          type: `image/png`,
          href: `https://streamer.bot/logo.png`
        }
      ]
    }
  }
})
