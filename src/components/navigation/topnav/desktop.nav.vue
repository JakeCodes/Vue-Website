<template>
  <div id="nav" class="center">
    <a href="#about" v-smooth-scroll class="nav-link">
      <div id="nav-title" class="nav-item">
        <img
          src="../../../assets/imgs/Jake.jpg"
          alt="JakeLogo"
          id="img"
          class="center"
        />
      </div>
    </a>
    <a href="#portfolio" v-smooth-scroll class="nav-link">
      <v-btn text rounded class="nav-item">Portfolio</v-btn>
    </a>
    <a href="#skills" v-smooth-scroll class="nav-link">
      <v-btn text rounded class="nav-item">Skills</v-btn>
    </a>
    <a href="#interests" v-smooth-scroll class="nav-link">
      <v-btn text rounded class="nav-item">Interests</v-btn>
    </a>
    <a href="#contact" v-smooth-scroll class="nav-link">
      <v-btn text rounded class="nav-item">Contact Me</v-btn>
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
#img {
  border-radius: 50%;
  width: 60px;
}
#nav-title {
  font-size: 25px;
}
.nav-link {
  margin-right: 50px;
}
.nav-item {
  color: white !important;
  text-decoration: none;
  transition: color 0.2s;
}
.nav-item:hover {
  background-color: none !important;
  color: #dbcccc !important;
}
</style>
