<template>
  <div>
    <HeaderComp></HeaderComp>
    <BannerComp :banner-url="banner"></BannerComp>
    <BlogDetailsComp></BlogDetailsComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "@/components/blocks/HeaderComp.vue";
import BannerComp from "@/components/blocks/BannerComp.vue";
import BlogDetailsComp from "@/components/blocks/BlogDetailsComp.vue";
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
    BlogDetailsComp,
    FooterComp,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
