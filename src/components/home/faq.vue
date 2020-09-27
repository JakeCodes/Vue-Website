<template>
  <v-lazy min-height="200">
    <div
      id="faq"
      style="min-height: 100vh; padding: 100px"
      data-aos="fade-left"
    >
      <h1>FAQ</h1>
      <v-expansion-panels id="expansion-panels" accordion="true">
        <v-expansion-panel>
          <v-expansion-panel-header
            >When I got started?</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            December, 2019
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header
            >How I got started?</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            I decided to take a Comp Sci class in middle school. I loved how I
            could create anything
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>My Goals?</v-expansion-panel-header>
          <v-expansion-panel-content>
            To become a Software Engineer when I grow up
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-lazy>
</template>

<script>
export default {
  name: "FAQ",
};
</script>

<style scoped>
#expansion-panels {
  width: 50vw !important;
  margin-right: auto !important;
  margin-left: auto !important;
}
@media (max-width: 1000px) {
  #expansion-panels {
    width: 100vw;
  }
}
</style>
