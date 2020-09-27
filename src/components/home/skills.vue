<template functional>
  <div id="skills" style="min-height: 100vh; padding-top: 100px">
    <h1>Skills</h1>

    <p id="par">Python</p>
    <div class="skillsContainer" data-aos="zoom-in">
      <div class="skills py">90%</div>
    </div>

    <p id="par">Typescript/Javascript</p>
    <div class="skillsContainer" data-aos="zoom-in">
      <div class="skills ts">80%</div>
    </div>

    <p id="par">Java</p>
    <div class="skillsContainer" data-aos="zoom-in">
      <div class="skills java">75%</div>
    </div>

    <p id="par">C#</p>
    <div class="skillsContainer" data-aos="zoom-in">
      <div class="skills cs">60%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skills",
};
</script>

<style scoped>
#par {
  margin-top: 20px;
}

.skills {
  text-align: right;
  padding-right: 30px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 25px;
  color: white;
  height: 50px;
}

.skillsContainer {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ddd;
}

.py {
  width: 90%;
  background-color: #4caf50;
}
.ts {
  width: 80%;
  background-color: #2196f3;
}
.java {
  width: 75%;
  background-color: #f44336;
}
.cs {
  width: 60%;
  background-color: #808080;
}
@media (max-width: 1000px) {
  .skillsContainer {
    width: 90% !important;
  }
}
</style>
