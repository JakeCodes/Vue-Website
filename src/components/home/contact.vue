<template>
  <div
    id="contact"
    style="min-height: 100vh; padding: 100px; justify-content: center; display: flex;"
  >
    <form id="contactForm" v-on:submit="onSubmit">
      <h1 style="margin-bottom: 50px">Contact</h1>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="20"
        label="Name"
        solo
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        type="email"
        solo
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-textarea
        v-model="msg"
        :error-messages="msgErrors"
        label="Message"
        solo
        required
        @input="$v.msg.$touch()"
        @blur="$v.msg.$touch()"
        no-resize
      ></v-textarea>

      <v-btn class="mr-4" id="submitBtn" type="submit">submit</v-btn>
    </form>
    <v-snackbar v-model="snackbar" :vertical="vertical">
      Success
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  maxLength,
  minLength,
  email,
} from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "contact",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    msg: { required, minLength: minLength(20) },
  },

  data: () => ({
    name: "",
    email: "",
    msg: "",
    snackbar: false,
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 20 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    msgErrors() {
      const errors = [];
      if (!this.$v.msg.$dirty) return errors;
      !this.$v.msg.minLength &&
        errors.push("Message must be at least 20 characters long");
      !this.$v.msg.required && errors.push("Msg is required.");
      return errors;
    },
  },

  methods: {
    async onSubmit(e) {
      e.preventDefault();
      const url = `https://jakecodes-backend.herokuapp.com/?name=${this.name}&email=${this.email}&message=${this.msg}`
        .trim()
        .replace(" ", "+");

      await axios.get(url).catch((error) => {
        this.errorMessage = error.message;
        console.error("There was an error!", error);
      });
      await this.clear();
      this.snackbar = true;
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.msg = "";
    },
  },
};
</script>

<style scoped>
.card {
  width: 100% !important;
}
#contactForm {
  width: 50% !important;
}
#submitBtn {
  background-color: #b95b37 !important;
  color: white !important;
}
@media (max-width: 1000px) {
  #contactForm {
    width: 90% !important;
  }
}
</style>
