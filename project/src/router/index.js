import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import BlogPage from "@/pages/BlogPage";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import ProjectPage from "@/pages/ProjectPage";
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
      path: "/blog/:page?",
      name: "Blog",
      component: BlogPage,
    },
    {
      path: "/blog-details",
      name: "Blog Details",
      component: BlogDetailsPage,
    },
    {
      path: "/project",
      name: "Project",
      component: ProjectPage,
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
