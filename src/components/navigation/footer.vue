<template>
  <div id="footer">
    <v-footer dark padless>
      <v-card class="flex" id="footerCard">
        <v-card-title class="primary" id="footerTop">
          <strong>Let's Get Connected!</strong>
          <v-spacer />
          <div v-for="icon in icons" :key="icon">
            <a :href="icon.link" target="_blank">
              <v-btn class="mx-4" dark icon>
                <v-icon size="35px" id="icon">{{ icon.icon }}</v-icon>
              </v-btn>
            </a>
          </div>
        </v-card-title>

        <v-card-text
          id="footerBottom"
          class="py-2 white--text text-center"
          style="height: 60px; justify-content: center; align-items: center; display: flex"
        >
          {{ new Date().getFullYear() }} —
          <strong>JakeCodes</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "footer",
  data: () => ({
    icons: [
      { icon: "mdi-discord", link: "https://discord.jakecodes.com" },
      { icon: "mdi-github", link: "https://github.jakecodes.com" },
      { icon: "mdi-twitter", link: "https://twitter.com/codes_jake" },
    ],
  }),
};
</script>

<style scoped>
#footer {
  margin-top: 80px;
}
#footerTop {
  background-color: #b95b37 !important;
  height: 80px !important;
}
#icon:hover {
  color: #41474d;
}
@media (max-width: 1000px) {
  #footer {
    margin-top: 90px;
  }
}
</style>
