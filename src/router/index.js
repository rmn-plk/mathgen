import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tasks from "../views/Tasks.vue";
import Generator from "../views/Generator.vue";
import Upload from "../views/Upload.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "",
      },
    },
    {
      path: "/upload",
      name: "upload",
      component: Upload,
      meta: {
        title: "Добавить примеры",
      },
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks,
    },
    {
      path: "/generator",
      name: "generator",
      component: Generator,

    },
  ],
});

export default router;
