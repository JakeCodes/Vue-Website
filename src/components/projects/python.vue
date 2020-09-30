<template>
  <div
    id="python"
    style="min-height: auto; padding-top: 80px; margin-bottom: 40px"
  >
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          style="position: absolute; top: 20px; left: 20px"
          v-bind="attrs"
          v-on="on"
        >
          <router-link to="/">
            <v-icon size="40px" id="icon" style="color: #b95b37"
              >mdi-close</v-icon
            >
          </router-link>
        </v-btn>
      </template>
      <span>Close</span>
    </v-tooltip>
    <h1>Python Projects</h1>
    <ProjectCard
      github="#"
      title="Project 1"
      titleColor="white"
      animation="fade-left"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNA6jrEJHnCQdVbQEqMXAIlrK5aecODS4IwQ&usqp=CAU"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil ipsa ullam labore deleniti obcaecati illum quia dolore minus unde. Dolorum itaque molestiae saepe sequi quibusdam consectetur aspernatur. Delectus, iste?"
    />
    <ProjectCard
      github="#"
      title="Project 2"
      titleColor="white"
      animation="fade-right"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNA6jrEJHnCQdVbQEqMXAIlrK5aecODS4IwQ&usqp=CAU"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil ipsa ullam labore deleniti obcaecati illum quia dolore minus unde. Dolorum itaque molestiae saepe sequi quibusdam consectetur aspernatur. Delectus, iste?"
    />
  </div>
</template>

<script>
import ProjectCard from "../utils/projectCard";

export default {
  name: "python",
  components: { ProjectCard },
  beforeMount() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped></style>
