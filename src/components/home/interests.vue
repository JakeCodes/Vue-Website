<template>
  <div
    id="interests"
    style="min-height: auto; padding: 100px"
    data-aos="fade-left"
  >
    <h1>Interests</h1>
    <p>Other than programming I enjoy the following</p>
    <v-card id="interestsCard">
      <v-card-text style="color: white">
        <ul style="text-align: left">
          <li>Running</li>
          <li>Biking</li>
          <li>Swimming</li>
          <li>Gaming</li>
          <li>Word Search Puzzles</li>
          <li>Solving Problems</li>
        </ul>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Interests",
};
</script>

<style scoped>
#interestsCard {
  width: 50vw !important;
  background-color: #41474d;
  margin-right: auto !important;
  margin-left: auto !important;
}
@media (max-width: 1000px) {
  #interestsCard {
    width: 100vw;
  }
}
</style>
