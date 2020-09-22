<template>
  <div id="footer">
    <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center" id="footerCard">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <a :href="icon.link" target="_blank">
              <v-icon size="24px" id="icon">{{ icon.icon }}</v-icon>
            </a>
          </v-btn>
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
      { icon: "mdi-discord", link: "https://discord.jakecodes.com" },
      { icon: "mdi-github", link: "https://github.jakecodes.com" },
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
