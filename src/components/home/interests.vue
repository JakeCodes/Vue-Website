<template>
  <div
    id="interests"
    style="
      min-height: auto;
      padding: 100px;
      padding-bottom: 100px;
      background-color: #a66046;
      color: white;
    "
  >
    <h1>Interests</h1>
    <p>Other than programming I enjoy the following</p>
    <div data-aos="fade-left">
      <v-card id="interestsCard" shaped style="text-align: left">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="item">Running</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="item">Biking</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="item">Swimming</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="item">Gaming</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="item">
              Word Search Puzzles
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="item">Solving Problems</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
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
.item {
  color: white;
}
@media (max-width: 1000px) {
  #interestsCard {
    width: 100vw;
  }
}
</style>
