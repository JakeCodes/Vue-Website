<template>
  <div class="all">
    <Nav />
    <div class="page">
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  </div>
</template>

<script>
import About from "./about";
import Portfolio from "./portfolio";
import Skills from "./skills";
import Contact from "./contact";
import Nav from "../navigation/nav";

export default {
  name: "about",
  components: { About, Portfolio, Skills, Contact, Nav },
};
</script>

<style scoped>
.page {
  margin-top: 70px;
}
</style>
