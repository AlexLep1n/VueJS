<template>
  <section class="articles articles__mb">
    <div class="container">
      <h2 class="articles__section-title">Articles & News</h2>
      <ArticlesPart
        :card="true"
        :cardMb="true"
        :articlesNumber="currentPage"
      ></ArticlesPart>
      <PaginationPart @pageSelect="selectPage"></PaginationPart>
    </div>
  </section>
</template>

<script>
import PaginationPart from "../parts/PaginationPart.vue";
import ArticlesPart from "../parts/ArticlesPart.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "ArticlesComp",

  data() {
    return {
      currentPage: 1,
    };
  },

  methods: {
    ...mapMutations(["SELECTED_PAGE"]),
    selectPage(page) {
      this.SELECTED_PAGE(page);
    },
  },
  computed: {
    ...mapGetters(["newsArticles"]),
  },
  components: {
    ArticlesPart,
    PaginationPart,
  },
};
</script>

<style lang="scss" scoped>
$dmSerifD: "DM Serif Display", serif;
$jostFf: "Jost", sans-serif;
$headingColor: #292f36;
$txtColor: #4d5053;

@mixin df($jc, $ai, $g) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
  gap: $g;
}

@mixin fsw($ff, $fs) {
  font-family: $ff;
  font-size: $fs;
  font-weight: 400;
}

.articles {
  &__mb {
    margin-bottom: 200px;
  }

  &__section-title {
    color: $headingColor;
    @include fsw($dmSerifD, 50px);
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 30px;
  }

  &__cards {
    @include df(space-between, center, 27px);
    flex-wrap: wrap;
  }

  &__cards_mb {
    margin-bottom: 51px;
  }

  &__card {
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    padding: 21px;
    @include df(space-between, center, 21px);
    flex-direction: column;
    width: 382px;
    height: 521px;
    position: relative;
  }

  &__card:nth-child(2) {
    background-color: #f4f0ec;
  }

  &__card:nth-child(2) circle {
    fill: #fff;
  }

  &__img {
    border: none;
    border-radius: 45px 45px 0 0;
  }

  &__title {
    position: absolute;
    top: 249px;
    left: 41px;
    color: $txtColor;
    @include fsw($jostFf, 16px);
    line-height: 150%;
    letter-spacing: 0.16px;
    border: none;
    border-radius: 8px 8px 8px 0;
    background-color: #fff;
    padding: 4px 11px 8px;
  }

  &__card-box {
    @include df(space-between, flex-end, 0);
    margin-bottom: 16px;
  }

  &__card-desc {
    width: 290px;
    text-align: left;
  }

  &__card-heading {
    color: $headingColor;
    @include fsw($dmSerifD, 25px);
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-bottom: 39px;
  }

  &__card-txt {
    color: $txtColor;
    @include fsw($jostFf, 16px);
    line-height: 150%;
    letter-spacing: 0.16px;
  }

  &__arrow {
    cursor: pointer;
  }

  &__pagination-flex {
    @include df(center, center, 0);
  }

  &__pagination {
    @include df(center, center, 20px);
    width: 268px;
  }

  &__pagination-link {
    color: $txtColor;
    @include fsw($jostFf, 16px);
    font-weight: 500;
    line-height: 150%;
    border: 1px solid #cda274;
    padding: 13px 15px 12px 17px;
    border-radius: 100px;
  }

  &__pagination-link:first-of-type {
    border: none;
    background-color: #f4f0ec;
    padding: 14px 17px 14px 18px;
  }
}
</style>
