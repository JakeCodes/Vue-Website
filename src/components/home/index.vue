<template>
  <div class="all">
    <ResponsiveNav />
    <div class="page">
      <About />
      <Portfolio />
      <Skills />
      <Interests />
      <Contact />
    </div>
  </div>
</template>

<script>
import About from "./about";
import Portfolio from "./portfolio";
import Skills from "./skills";
import Interests from "./interests";
import Contact from "./contact";
import ResponsiveNav from "../navigation/topnav/responsive.nav";

export default {
  name: "Home",
  components: { About, Portfolio, Skills, Contact, ResponsiveNav, Interests },
};
</script>

<style scoped>
.page {
  margin-top: 70px;
}
</style>
