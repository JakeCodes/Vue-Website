<template>
  <div id="sidebar">
    <v-app-bar color="#B95B37" dark fixed>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>JakeCodes</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list shaped>
        <v-list-item-group>
          <a href="#about" v-smooth-scroll @click="drawer = false">
            <v-list-item>
              <v-list-item-title>JakeCodes</v-list-item-title>
            </v-list-item>
          </a>
          <a href="#portfolio" v-smooth-scroll @click="drawer = false">
            <v-list-item>
              <v-list-item-title>Portfolio</v-list-item-title>
            </v-list-item>
          </a>
          <a href="#skills" v-smooth-scroll @click="drawer = false">
            <v-list-item>
              <v-list-item-title>Skills</v-list-item-title>
            </v-list-item>
          </a>
          <a href="#contact" v-smooth-scroll @click="drawer = false">
            <v-list-item>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item>
          </a>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>
