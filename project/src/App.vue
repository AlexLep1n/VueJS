<template>
  <section class="blog" id="app">
    <BlogArticle />
  </section>
</template>

<script>
import BlogArticle from "./components/BlogArticle.vue";

export default {
  name: "App",
  components: {
    BlogArticle,
  },
};
</script>

<style lang="scss"></style>
