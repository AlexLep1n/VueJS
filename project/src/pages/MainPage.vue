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
          <a href="#" class="unique__link"
            >Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                stroke="#CDA274"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </a>
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
export default {
  name: "MainPage",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    HeaderComp,
    MainProjectsBlock,
    ResultsBlock,
    ArticlesPart,
    FooterComp,
  },
};
</script>

<style lang="scss" scoped></style>
