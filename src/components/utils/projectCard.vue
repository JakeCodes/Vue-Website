<template>
  <v-card class="mx-auto" max-width="600" id="card">
    <v-img class="white--text align-end" height="200px" :src="img">
      <v-card-title :style="{ color: titleColor }">{{ title }} </v-card-title>
    </v-img>
    <v-card-text>
      <div id="description">
        {{ description }}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <a :href="github" target="_blank">
            <v-btn text id="projectBtn" icon v-bind="attrs" v-on="on">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </a>
        </template>
        <span>Github</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "portfolioCard",
  props: {
    description: String,
    github: String,
    title: String,
    img: String,
    titleColor: String,
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
