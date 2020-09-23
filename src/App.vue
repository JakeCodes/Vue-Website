<template>
  <v-app id="app">
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/navigation/footer/footer";

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
.center {
  justify-content: center;
  align-items: center;
  display: flex;
}
h1 {
  text-transform: uppercase;
}
a {
  text-decoration: none;
}
</style>
