<template>
  <div>
    <HeaderComp></HeaderComp>
    <BannerComp :banner-url="banner"></BannerComp>
    <ProjectDetailsBlock></ProjectDetailsBlock>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import BannerComp from "../blocks/BannerComp.vue";
import FooterComp from "../blocks/FooterComp.vue";
import HeaderComp from "../blocks/HeaderComp.vue";
import ProjectDetailsBlock from "../blocks/ProjectDetailsBlock.vue";

export default {
  name: "ProjectDetailsPage",
  data() {
    return {
      banner: "url(./img/project-details/banner.jpg)",
    };
  },
  mounted() {},
  methods: {},
  components: { HeaderComp, FooterComp, BannerComp, ProjectDetailsBlock },
};
</script>

<style lang="scss" scoped></style>
