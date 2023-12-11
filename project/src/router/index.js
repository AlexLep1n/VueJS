import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import ArticlesPage from "@/pages/ArticlesPage";
import BlogPage from "@/pages/BlogPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage";
import NotFoundPage from "@/pages/NotFoundPage";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "Main",
      component: MainPage,
    },
    {
      path: "/articles",
      name: "Articles",
      component: ArticlesPage,
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogPage,
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectsPage,
    },
    {
      path: "/project-details",
      name: "ProjectDetails",
      component: ProjectDetailsPage,
    },
    {
      path: "/404",
      name: "NotFound",
      component: NotFoundPage,
    },
    {
      path: "*",
      redirect: { name: "NotFound" },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
