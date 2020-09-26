<template>
  <nav id="nav" class="center">
    <div id="nav-title">
      <v-btn text class="nav-btn-title">
        <a href="#about" v-smooth-scroll style="color: white">JakeCodes</a>
      </v-btn>
    </div>
    <div class="nav-item">
      <v-btn text class="nav-btn-item">
        <a href="#portfolio" v-smooth-scroll style="color: white">Portfolio</a>
      </v-btn>
    </div>
    <div class="nav-item">
      <v-btn text class="nav-btn-item">
        <a href="#skills" v-smooth-scroll style="color: white">Skills</a>
      </v-btn>
    </div>
    <div class="nav-item">
      <v-btn text class="nav-btn-item">
        <a href="#contact" v-smooth-scroll style="color: white">Contact Me</a>
      </v-btn>
    </div>
  </nav>
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
#nav-title,
.nav-btn-title {
  padding-right: 50px;
  font-size: 25px;
}
.nav-item {
  color: white !important;
  text-decoration: none;
  padding-right: 30px;
}
.nav-item:hover {
  color: #41474d !important;
}
</style>
