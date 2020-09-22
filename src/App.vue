<template>
  <v-app id="app">
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/navigation/footer";

export default {
  name: "App",
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  text-align: center;
}
h1 {
  text-transform: uppercase;
}
a {
  text-decoration: none;
}
</style>
