import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/detail/:id", component: Detail }
];

export default createRouter({
  history: createWebHistory(),
  routes
});