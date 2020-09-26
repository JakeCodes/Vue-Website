<template>
  <v-card class="mx-auto" max-width="600" id="card" :data-aos="animation">
    <v-img class="white--text align-end" height="200px" :src="img">
      <v-card-title style="color: black">{{ title }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div id="description">{{ description }}</div>
    </v-card-text>

    <v-card-actions>
      <router-link :to="link">
        <v-btn text id="projectBtn" v-bind="attrs" v-on="on"
          >See Projects</v-btn
        >
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "portfolioCard",
  props: {
    description: String,
    link: String,
    title: String,
    img: String,
    animation: String,
  },
};
</script>

<style scoped>
#card {
  margin-top: 20px;
  background-color: #41474d;
}
#description {
  color: white;
}
#projectBtn {
  color: #b95b37;
}
</style>
