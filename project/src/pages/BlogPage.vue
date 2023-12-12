<template>
  <div>
    <HeaderComp></HeaderComp>
    <BannerComp :banner-url="banner"></BannerComp>
    <BlogComp></BlogComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "@/components/blocks/HeaderComp.vue";
import BannerComp from "@/components/blocks/BannerComp.vue";
import BlogComp from "@/components/blocks/BlogComp.vue";
import FooterComp from "@/components/blocks/FooterComp.vue";

export default {
  name: "BlogPage",
  data() {
    return {
      banner: "url(./img/blog-banner.jpg)",
    };
  },
  methods: {},

  components: {
    HeaderComp,
    BannerComp,
    BlogComp,
    FooterComp,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
