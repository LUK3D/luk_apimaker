import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/cssgenerator",
    name: "Css Generator",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cssgenerator.vue")
  }
  ,
  {
    path: "/doc",
    name: "Documentation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/doc.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
