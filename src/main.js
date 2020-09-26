import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import vuetify from "./plugins/vuetify";
import VueSmoothScroll from "vue2-smooth-scroll";

import aos from "aos";
import "aos/dist/aos.css";

Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false,
});

Vue.config.productionTip = false;

new Vue({
  created() {
    aos.init({ duration: 800, once: true });
  },
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
