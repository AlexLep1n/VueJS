<template>
  <div id="app">
    <HeaderPage></HeaderPage>
    <BlogArticle></BlogArticle>
    <FooterPage></FooterPage>
    <ProductList></ProductList>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import BlogArticle from './components/pages/BlogArticle.vue'
import HeaderPage from './components/block/HeaderPage.vue'
import FooterPage from './components/block/FooterPage.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    BlogArticle,
    HeaderPage,
    FooterPage
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
