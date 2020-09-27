<template>
  <div id="nav" class="center">
    <a href="#about" v-smooth-scroll class="nav-link">
      <v-btn text id="nav-title" class="nav-item">JakeCodes</v-btn>
    </a>
    <a href="#portfolio" v-smooth-scroll class="nav-link">
      <v-btn text class="nav-item">Portfolio</v-btn>
    </a>
    <a href="#skills" v-smooth-scroll class="nav-link">
      <v-btn text class="nav-item">Skills</v-btn>
    </a>
    <a href="#faq" v-smooth-scroll class="nav-link">
      <v-btn text class="nav-item">FAQ</v-btn>
    </a>
    <a href="#contact" v-smooth-scroll class="nav-link">
      <v-btn text class="nav-item">Contact Me</v-btn>
    </a>
  </div>
</template>

<script>
export default {
  name: "nav",
};
</script>

<style scoped>
#nav {
  position: fixed;
  width: 100vw;
  background-color: #b95b37;
  height: 70px;
  z-index: 1000;
}
#nav-title {
  font-size: 25px;
}
.nav-link {
  margin-right: 30px;
}
.nav-item {
  color: white !important;
  text-decoration: none;
}
.nav-item:hover {
  color: #41474d !important;
}
</style>
