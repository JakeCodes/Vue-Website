<template>
  <div id="footer" style="color: white">
    <v-footer dark padless>
      <v-card flat tile class="white--text text-center" id="footerCard">
        <v-card-text id="footerTop" class="center">
          <div v-for="icon in icons" :key="icon">
          <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-4" icon v-bind="attrs" v-on="on">
             <a
            :href="icon.link"
            target="_blank"
          >
              <v-icon size="40px" id="icon">{{ icon.icon }}</v-icon>
                                </a>
            </v-btn>
        </template>
        <span>{{ icon.name }}</span>
      </v-tooltip>
          </div>
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
        name: "Discord",
        icon: "mdi-discord",
        link: "https://discord.jakecodes.com",
      },
      {
        name: "Github",
        icon: "mdi-github",
        link: "https://github.jakecodes.com",
      },
      {
        name: "Stack-Overflow",
        icon: "mdi-stack-overflow",
        link: "https://stackoverflow.jakecodes.com",
      },
      {
        name: "Youtube",
        icon: "mdi-youtube",
        link: "https://youtube.jakecodes.com",
      },
    ],
  }),
};
</script>

<style scoped>
#footerCard {
  width: 100vw;
  background-color: #41474d !important;
}
#footerTop {
  height: 130px;
}
#footerBottom {
  background-color: #b95b37 !important;
}
#icon {
  color: white !important;
}
#icon:hover {
  color: #b95b37 !important;
}
@media (max-width: 1000px) {
  #footer {
    margin-top: 90px;
  }
}
</style>
