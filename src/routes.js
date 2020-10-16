import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home/index";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "*", redirect: "/" },
  ],
});
