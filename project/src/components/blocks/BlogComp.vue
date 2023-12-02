<template>
  <section class="blog">
    <div class="blog__flex container">
      <div class="blog__articles">
        <div
          v-for="(article, index) in selectedArticles"
          :key="index"
          class="blog__article"
        >
          <h1 class="blog__heading">{{ article.heading }}</h1>
          <img
            class="blog__article-img"
            :src="article.imgSrc"
            :alt="article.imgAlt"
          />
          <div class="blog__article-img-info">
            <p class="blog__date">{{ article.postDate }}</p>
            <p class="blog__links">Interior / Home / Decore</p>
          </div>
          <p class="blog__content">
            {{ article.text }}
          </p>
        </div>
      </div>
      <div class="blog__tags">
        <h4 class="blog__tags-heading">Tags</h4>
        <div class="blog__tags-box">
          <button
            v-for="(tag, index) in tags"
            :key="index"
            @click="filterArticles(index)"
            :class="{ blog__tag: !tag.clicked, blog__tag_active: tag.clicked }"
          >
            {{ tag.tagName }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "BlogComp",

  data() {
    return {};
  },
  methods: {
    ...mapMutations(["FILTER_ARTICLES"]),

    filterArticles(index) {
      this.FILTER_ARTICLES(index);
    },
  },
  computed: {
    ...mapGetters(["articles", "tags", "selectedArticles"]),
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

.blog {
  margin-bottom: 96px;

  &__flex {
    @include df(space-between, flex-start, 52px);
  }

  &__articles {
    @include df(center, center, 35px);
    flex-direction: column;
  }

  &__article {
    @include df(center, flex-start, 0);
    flex-direction: column;
    max-width: 799px;
    text-align: left;
  }

  &__heading {
    color: $headingColor;
    @include fsw($dmSerifD, 50px);
    line-height: 125%;
    letter-spacing: 1px;
    max-width: 684px;
    margin-bottom: 11px;
  }

  &__article-img {
    border: none;
    border-radius: 50px;
    margin-bottom: 46px;
    height: 539px;
    width: 799px;
  }

  &__article-img-info {
    @include df(space-between, center, 409px);
    margin-bottom: 48px;
  }

  &__date,
  &__links {
    color: $txtColor;
    @include fsw($jostFf, 16px);
    line-height: 150%;
    letter-spacing: 0.16px;
  }

  &__content {
    color: $txtColor;
    @include fsw($jostFf, 22px);
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__tags-heading {
    color: $dmSerifD;
    @include fsw($dmSerifD, 25px);
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  &__tags {
    width: 25%;
  }

  &__tags-box {
    @include df(flex-start, center, 10px);
    flex-wrap: wrap;
  }

  &__tag {
    color: $txtColor;
    @include fsw($jostFf, 18px);
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 9px 30px;
    border: none;
    border-radius: 10px;
    background: #f4f0ec;
    cursor: pointer;
  }

  &__tag_active {
    color: #fff;
    @include fsw($jostFf, 18px);
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 9px 30px;
    border: none;
    border-radius: 10px;
    background: $headingColor;
    cursor: pointer;
  }
}
</style>
