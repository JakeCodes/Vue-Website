<template>
  <div
    id="contact"
    style="
      min-height: 100vh;
      padding: 100px;
      justify-content: center;
      display: flex;
    "
  >
    <form id="contactForm" v-on:submit="onSubmit">
      <h1 style="margin-bottom: 50px">Contact Me</h1>
      <div data-aos="fade-left">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="20"
          label="Name"
          solo
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
      </div>
      <div data-aos="fade-right">
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          type="email"
          solo
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
      </div>
      <div data-aos="fade-left">
        <v-textarea
          v-model="msg"
          :error-messages="msgErrors"
          label="Message"
          solo
          @input="$v.msg.$touch()"
          @blur="$v.msg.$touch()"
        ></v-textarea>
      </div>

      <v-btn :loading="loading" class="mr-4" id="submitBtn" @click="onSubmit"
        >submit</v-btn
      >
    </form>
    <v-snackbar :color="snackColor" v-model="snackbar">
      <span v-if="status === 'INVALID'">Invalid Form</span>
      <span v-if="status === 'SUCCESS'">Success</span>
      <span v-if="status === 'EMAIL'">Error Sending Email</span>
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
    msg: { required, minLength: minLength(20), maxLength: maxLength(1200) },
  },

  data: () => ({
    name: "",
    email: "",
    msg: "",
    status: "",
    loading: false,
    snackbar: false,
    snackColor: "",
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
      !this.$v.msg.maxLength &&
        errors.push("Message must be at most 1200 characters long");
      !this.$v.msg.required && errors.push("Msg is required.");
      return errors;
    },
  },

  methods: {
    async onSubmit(e) {
      e.preventDefault();
      this.loading = true;
      if (this.$v.$invalid) {
        this.snackColor = "error";
        this.status = "INVALID";
        this.snackbar = true;
        this.loading = false;
        return;
      }
      const url = `https://jakecodes-backend.herokuapp.com/
      ?name=${this.name.split("&").join("and")}
      &email=${this.email.split("&").join("and")}
      &message=${this.msg.split("&").join("and")}`
        .trim()
        .split(" ")
        .join("+");

      await axios
        .get(url)
        .then((res) => res.data)
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
          return (
            (this.status = "EMAIL"),
            (this.snackbar = true),
            (this.loading = false)
          );
        });
      await this.clear();
      this.snackColor = "success";
      this.status = "SUCCESS";
      this.loading = false;
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
#contact {
  min-width: 100vw !important;
}
#contactForm {
  min-width: 50% !important;
}
#submitBtn {
  background-color: #b95b37 !important;
  color: white !important;
}
@media (max-width: 1000px) {
  #contactForm {
    width: 100vw !important;
  }
}
</style>
