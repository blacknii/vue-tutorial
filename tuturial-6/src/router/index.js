import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import AddProject from "../views/AddProject.vue";
import EditProject from "../views/EditProject.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add",
    name: "addProject",
    component: AddProject,
  },
  {
    path: "/edit",
    name: "editProject",
    component: EditProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
