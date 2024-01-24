<template>
  <section class="articles articles__mb">
    <div class="container">
      <h2 class="articles__section-title">Articles & News</h2>
      <ArticlesPart :card="true" :cardMb="true"></ArticlesPart>
      <PaginationPart></PaginationPart>
    </div>
  </section>
</template>

<script>
import PaginationPart from "../parts/PaginationPart.vue";
import ArticlesPart from "../parts/ArticlesPart.vue";
export default {
  name: "ArticlesComp",

  data() {
    return {};
  },

  methods: {},
  computed: {},
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
}
</style>
