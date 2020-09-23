<template>
  <div id="footer">
    <v-footer dark padless>
      <v-card flat tile class="white--text text-center" id="footerCard">
        <v-card-text id="footerTop" class="center">
          <a
            v-for="icon in icons"
            :key="icon"
            :href="icon.link"
            target="_blank"
          >
            <v-btn class="mx-4 white--text" icon>
              <v-icon size="40px" id="icon">{{ icon.icon }}</v-icon>
            </v-btn>
          </a>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text" id="footerBottom">
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
      {
        icon: "mdi-discord",
        link: "https://discord.jakecodes.com",
      },
      {
        icon: "mdi-github",
        link: "https://github.jakecodes.com",
      },
      {
        icon: "mdi-stack-overflow",
        link: "https://stackoverflow.jakecodes.com",
      },
      {
        icon: "mdi-youtube",
        link: "https://youtube.jakecodes.com",
      },
    ],
  }),
};
</script>

<style scoped>
#footer {
  margin-top: 80px;
}
#footerCard {
  width: 100vw;
  background-color: #b95b37 !important;
}
#footerTop {
  height: 130px;
}
#footerBottom {
  background-color: #41474d !important;
}
#icon {
  color: white !important;
}
#icon:hover {
  color: #41474d !important;
}
@media (max-width: 1000px) {
  #footer {
    margin-top: 90px;
  }
}
</style>
