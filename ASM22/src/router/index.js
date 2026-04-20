import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import Writer from "../views/Writer.vue";
import Face from "../views/Face.vue";

// ROUTES
const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/chitiet",
    component: Detail
  },

  // 🔐 CẦN ĐĂNG NHẬP
  {
    path: "/writer",
    component: Writer,
    meta: { requiresAuth: true }
  },
  {
    path: "/face",
    component: Face,
    meta: { requiresAuth: true }
  },

  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem("user");

  if (to.meta.requiresAuth && !user) {
    alert("Bạn phải đăng nhập trước!");
    next("/"); 
  } else {
    next(); 
  }
});

export default router;