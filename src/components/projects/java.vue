<template>
  <div
    id="Java"
    style="min-height: auto; padding-top: 80px; margin-bottom: 40px"
  >
    <ProjectCard
      github="#"
      title="Java Project 1"
      titleColor="white"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNA6jrEJHnCQdVbQEqMXAIlrK5aecODS4IwQ&usqp=CAU"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil ipsa ullam labore deleniti obcaecati illum quia dolore minus unde. Dolorum itaque molestiae saepe sequi quibusdam consectetur aspernatur. Delectus, iste?"
    />
    <ProjectCard
      github="#"
      title="Java Project 2"
      type="java"
      titleColor="white"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNA6jrEJHnCQdVbQEqMXAIlrK5aecODS4IwQ&usqp=CAU"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nihil ipsa ullam labore deleniti obcaecati illum quia dolore minus unde. Dolorum itaque molestiae saepe sequi quibusdam consectetur aspernatur. Delectus, iste?"
    />
  </div>
</template>

<script>
import ProjectCard from "../utils/projectCard";

export default {
  name: "Java",
  components: { ProjectCard },
};
</script>
