<template>
  <div class="all">
    <Nav v-if="!mobileNav" />
    <Sidebar v-if="mobileNav" />
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
import Sidebar from "../navigation/sidebar";

export default {
  name: "about",
  components: { About, Portfolio, Skills, Contact, Nav, Sidebar },
  data() {
    return {
      mobileNav: false,
    };
  },
  created() {
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.handleView);
    this.handleView();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleView);
  },
  methods: {
    handleView() {
      this.mobileNav = window.innerWidth <= 990;
    },
  },
};
</script>

<style scoped>
.page {
  margin-top: 70px;
}
</style>
