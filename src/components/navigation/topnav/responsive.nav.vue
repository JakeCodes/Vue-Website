<template>
  <div class="responsiveNav">
    <MobileNav v-if="mobileNav" />
    <DesktopNav v-else />
  </div>
</template>

<script>
import DesktopNav from "./desktop.nav";
import MobileNav from "./mobile.nav";

export default {
  name: "responsiveNav",
  components: { DesktopNav, MobileNav },
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
      this.mobileNav = window.innerWidth <= 1000;
    },
  },
};
</script>

<style scoped>
.page {
  margin-top: 70px;
}
</style>
