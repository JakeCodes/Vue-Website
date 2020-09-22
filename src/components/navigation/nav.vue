<template>
  <div id="nav">
    <a href="#about" v-smooth-scroll>
      <v-btn text id="nav-title" class="nav-item">JakeCodes</v-btn>
    </a>
    <a href="#portfolio" v-smooth-scroll>
      <v-btn text class="nav-item">Portfolio</v-btn>
    </a>
    <a href="#skills" v-smooth-scroll>
      <v-btn text class="nav-item">Skills</v-btn>
    </a>
    <a href="#contact" v-smooth-scroll>
      <v-btn text class="nav-item">Contact</v-btn>
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
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1000;
}
#nav-title {
  margin-right: 50px;
  font-size: 25px;
}
.nav-item {
  color: white !important;
  text-decoration: none;
  margin-right: 30px;
}
.nav-item:hover {
  color: #41474d !important;
}
</style>
