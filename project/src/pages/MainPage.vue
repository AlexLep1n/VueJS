<template>
  <div>
    <HeaderComp></HeaderComp>

    <section class="unique">
      <div class="unique__bg container">
        <div class="unique__flex">
          <h1 class="unique__heading">Let Your Home Be Unique</h1>
          <p class="unique__txt">
            There are many variations of the passages of lorem Ipsum
            fromavailable, majority.
          </p>
          <BlackButtonPart :link="'/blog'" :btnText="btnText"></BlackButtonPart>
        </div>
      </div>
    </section>
    <MainProjectsBlock></MainProjectsBlock>
    <ResultsBlock></ResultsBlock>
    <section class="articles">
      <div class="container">
        <div class="articles__desc">
          <h2 class="articles__heading">Articles & News</h2>
          <p class="articles__txt">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using.
          </p>
        </div>
        <ArticlesPart
          :card="true"
          :cardMb="false"
          :articlesNumber="3"
        ></ArticlesPart>
      </div>
    </section>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from "@/components/blocks/HeaderComp.vue";
import MainProjectsBlock from "@/components/blocks/MainProjectsBlock.vue";
import ResultsBlock from "@/components/blocks/ResultsBlock.vue";
import ArticlesPart from "@/components/parts/ArticlesPart.vue";
import FooterComp from "@/components/blocks/FooterComp.vue";
import BlackButtonPart from "@/components/parts/BlackButtonPart.vue";
export default {
  name: "MainPage",

  data() {
    return {
      btnText: "Get Started",
    };
  },

  mounted() {},

  methods: {},
  components: {
    HeaderComp,
    MainProjectsBlock,
    ResultsBlock,
    ArticlesPart,
    FooterComp,
    BlackButtonPart,
  },
};
</script>

<style lang="scss" scoped></style>
