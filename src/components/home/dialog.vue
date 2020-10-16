<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    style="z-index: 9999"
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }" style="min-height: auto">
      <v-btn color="#B95B37" text dark v-bind="attrs" v-on="on">
        See Projects
      </v-btn>
    </template>
    <v-card>
      <v-toolbar dark color="#B95B37">
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
      </v-toolbar>
      <v-lazy>
        <Python v-if="(type === 'python')" />
        <Javascript v-if="(type === 'javascript')" />
        <Java v-if="(type === 'java')" />
      </v-lazy>
    </v-card>
  </v-dialog>
</template>

<script>
import Javascript from "../projects/javascript";
import Java from "../projects/java";
import Python from "../projects/python";

export default {
  props: {
    title: String,
    type: String,
  },
  data() {
    return {
      dialog: false,
    };
  },
  components: { Javascript, Java, Python },
};
</script>
