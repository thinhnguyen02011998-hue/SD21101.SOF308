import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Writer from "../views/Writer.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/detail/:id", component: Detail },
  { path: "/writer", component: Writer },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/profile", component: Profile }
];

export default createRouter({
  history: createWebHistory(),
  routes
});