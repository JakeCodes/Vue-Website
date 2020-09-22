import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home/index";

import Python from "./components/projects/python";
import Java from "./components/projects/java";
import Javascript from "./components/projects/javascript";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/projects/python", component: Python },
    { path: "/projects/java", component: Java },
    { path: "/projects/javascript", component: Javascript },
  ],
});
