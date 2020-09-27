<template>
  <div class="all">
    <ResponsiveNav />
    <div class="page">
      <About />
      <Portfolio />
      <Skills />
      <FAQ />
      <Contact />
    </div>
  </div>
</template>

<script>
import About from "./about";
import Portfolio from "./portfolio";
import Skills from "./skills";
import FAQ from "./faq";
import Contact from "./contact";
import ResponsiveNav from "../navigation/topnav/responsive.nav";

export default {
  name: "Home",
  components: { About, Portfolio, Skills, Contact, ResponsiveNav, FAQ },
};
</script>

<style scoped>
.page {
  margin-top: 70px;
}
</style>
