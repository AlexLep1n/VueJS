<template>
  <section class="articles articles__mb">
    <div class="container">
      <h2 class="articles__section-title">Articles & News</h2>
      <div class="articles__cards articles__cards_mb">
        <article
          class="articles__card"
          v-for="article in newsArticles"
          :key="article.id"
        >
          <img
            class="articles__img"
            :src="article.imgUrl"
            :alt="article.imgAlt"
          />
          <h4 class="articles__title">{{ article.imgTitle }}</h4>
          <div class="articles__card-box">
            <div class="articles__card-desc">
              <h3 class="articles__card-heading">{{ article.cardHeading }}</h3>
              <p class="articles__card-txt">{{ article.cardDate }}</p>
            </div>
            <svg
              class="articles__arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
            >
              <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
              <path
                d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </article>
      </div>
      <div class="articles__pagination-flex">
        <div class="articles__pagination">
          <a href="#" class="articles__pagination-link">01</a>
          <a href="#" class="articles__pagination-link">02</a>
          <a href="#" class="articles__pagination-link">03</a>
          <a href="#" class="articles__pagination-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="53"
              height="52"
              viewBox="0 0 53 52"
              fill="none"
            >
              <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
              <path
                d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ArticlesComp",

  data() {
    return {};
  },

  methods: {},
  computed: {
    ...mapGetters(["newsArticles"]),
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
