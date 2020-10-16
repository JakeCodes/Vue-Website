<template>
  <v-card
    :elevation="hover ? 15 : 2"
    class="mx-auto"
    max-width="600"
    id="card"
    :data-aos="animation"
    style="margin-right: auto; margin-left: auto"
  >
    <v-img class="white--text align-end" height="200px" :src="img">
      <v-card-title style="color: black">{{ title }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">
      <div id="description">{{ description }}</div>
    </v-card-text>

    <v-card-actions>
      <Dialog :title="title" :type="type" />
    </v-card-actions>
  </v-card>
</template>

<script>
import Dialog from "../home/dialog";

export default {
  name: "portfolioCard",
  components: { Dialog },
  props: {
    description: String,
    title: String,
    type: String,
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
