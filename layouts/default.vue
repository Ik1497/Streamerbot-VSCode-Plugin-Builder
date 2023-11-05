<script setup>
const route = useRoute()
const router = useRouter()

const prevRoute = ref(``)

handleRoute(route)

watch(route, async (newRoute, oldRoute) => {
  handleRoute(newRoute)
})

function handleRoute(routeEvent) {
  if (routeEvent.path.split(`/`).length === 2) {
    prevRoute.value = `/`
  } else if (routeEvent.path.split(`/`).length === 3) {
    prevRoute.value = `/${routeEvent.path.split(`/`).splice(1, 1)}`
  } else {
    prevRoute.value = `/`
  }
}
</script>

<template>
  <v-app>
    <v-app-bar
      color="surface"
      density="comfortable"
      elevation="0"
      :style="{
        borderBottom: `var(--application-border)`,
      }">
      <v-btn v-if="route.path != `/`" icon size="small" :to="prevRoute"
        ><v-icon>mdi-chevron-left</v-icon></v-btn
      >

      <div
        :style="{
          fontFamily: `Poppins`,
          fontSize: `1.25rem`,
          paddingLeft: `1rem`,
          fontWeight: `200`,
          display: `flex`,
          alignItems: `center`,
          gap: `.25rem`,
        }">
        <img
          src="https://streamer.bot/logo-transparent.svg"
          alt="favicon"
          :style="{
            height: `2rem`,
          }" />
        <p>
          Streamer.bot
          <span
            :style="{
              fontWeight: `500`,
            }"
            >VSCode Plugin Builder</span
          >
        </p>
      </div>

      <v-spacer></v-spacer>

      <v-btn v-if="route.path != `/search`" icon to="/search" size="small">
        <v-icon>mdi-magnify</v-icon>
        <v-tooltip activator="parent" location="bottom">Search</v-tooltip>
      </v-btn>
    </v-app-bar>

    <v-main
      style="
        margin: 1rem;
        padding-inline: 1rem;
        max-width: 1200px;
        margin-inline: auto;
        width: 100%;
      ">
      <slot></slot>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss"></style>
