import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: `dark`,
      themes: {
        dark: {
          colors: {
            primary: colors.blue.darken1,
            secondary: colors.blue.lighten1,
            background: `#0f0f0f`,
            surface: `#202020`
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
