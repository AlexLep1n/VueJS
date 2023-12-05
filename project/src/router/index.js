import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import ArticlesPage from "@/pages/ArticlesPage";
import BlogPage from "@/pages/BlogPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage";

Vue.use(VueRouter);

export const router = new VueRouter({
  // base: '/',
  // mode: 'history',
  routes: [
    {
      path: "/",
      component: MainPage,
    },
    {
      path: "/articles",
      component: ArticlesPage,
    },
    {
      path: "/blog",
      component: BlogPage,
    },
    {
      path: "/projects",
      component: ProjectsPage,
    },
    {
      path: "/project-details",
      component: ProjectDetailsPage,
    },
  ],
});
