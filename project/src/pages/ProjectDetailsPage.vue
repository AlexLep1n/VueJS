<template>
  <div>
    <HeaderComp></HeaderComp>
    <BannerComp :banner-url="banner"></BannerComp>
    <ProjectDetailsBlock></ProjectDetailsBlock>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import BannerComp from "@/components/blocks/BannerComp.vue";
import FooterComp from "@/components/blocks/FooterComp.vue";
import HeaderComp from "@/components/blocks/HeaderComp.vue";
import ProjectDetailsBlock from "@/components/blocks/ProjectDetailsBlock.vue";

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
