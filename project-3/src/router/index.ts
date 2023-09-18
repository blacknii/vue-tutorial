import { createRouter, createWebHistory } from "vue-router";

import CharactersView from "../views/CharactersView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "characters",
      component: CharactersView,
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: ProfileView,
      props: true,
    },
  ],
});

export default router;
