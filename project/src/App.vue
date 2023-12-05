<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import ProjectDetailsPage from "./pages/ProjectDetailsPage.vue";
// import ProductList from './ProductList.vue'
// import BlogPage from "./pages/BlogPage.vue";
// import ArticlesPage from "./pages/ArticlesPage.vue";
// import MainPage from "./pages/MainPage.vue";
// import ProjectPage from "./pages/ProjectPage.vue";
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: {
    RouterView,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
