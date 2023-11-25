<template>
  <div id="app">
    <!-- <BlogPage></BlogPage> -->
    <!-- <ArticlesPage></ArticlesPage> -->
    <!-- <ProductList></ProductList> -->
    <ProjectPage></ProjectPage>
  </div>
</template>

<script>
// import ProductList from './components/ProductList.vue'
// import BlogPage from './components/pages/BlogPage.vue'
// import ArticlesPage from './components/pages/ArticlesPage.vue'
import ProjectPage from './components/pages/ProjectPage.vue'

export default {
  name: 'App',
  components: {
    // ProductList,
    // ArticlesPage
    // BlogPage
    ProjectPage
  }
}
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
