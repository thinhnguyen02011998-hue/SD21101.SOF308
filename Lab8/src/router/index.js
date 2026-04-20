import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import BlogList from "../views/BlogList.vue";
import NotFound from "../views/NotFound.vue";
import BlogPost from "../views/BlogPost.vue";
import UserProfile from "../views/profile/UserProfile.vue";
import UserProfileInfo from "../views/profile/UserProfileInfo.vue";
import UserProfileSettings from "../views/profile/UserProfileSettings.vue";


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/blog", name: "BlogList", component: BlogList },
  { path: "/blog/:id", name: "BlogPost", component: BlogPost, props: true },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
  path: "/profile/:userId",
  name: "UserProfile",
  component: UserProfile,
  props: true,
  children: [
    {
      path: "",
      redirect: (to) => ({ name: "UserProfileInfo", params: to.params }),
    },
    {
      path: "info",
      name: "UserProfileInfo",
      component: UserProfileInfo,
      props: true,
    },
    {
      path: "settings",
      name: "UserProfileSettings",
      component: UserProfileSettings,
      props: true,
    },
  ],
}
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;




