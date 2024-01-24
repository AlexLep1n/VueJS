<template>
  <section class="page-title" :style="{ 'background-image': imgUrl }">
    <div class="page-title__content container">
      <h2 class="page-title__heading">{{ title }}</h2>
      <div class="page-title__breadcrumps">
        <router-link to="/" class="page-title__link">Home</router-link>
        <router-link to="/blog" class="page-title__link">Blog</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageTitle",
  props: ["title", "imgUrl"],

  data() {
    return {};
  },

  methods: {},
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

.page-title {
  background-repeat: no-repeat;
  background-size: cover;
  height: 356px;
  @include df(center, flex-end, 0);
  margin-bottom: 200px;

  &__content {
    @include df(center, center, 0);
    flex-direction: column;
    width: 503px;
    height: 178px;
    background-color: #fff;
    border: none;
    border-radius: 37px 37px 0 0;
  }

  &__heading {
    color: $headingColor;
    @include fsw($dmSerifD, 50px);
    line-height: 125%;
  }

  &__breadcrumps {
    @include df(space-between, center, 5px);
  }

  &__link {
    color: $txtColor;
    @include fsw($jostFf, 22px);
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__link::before {
    content: "/";
    margin-right: 5px;
  }

  &__link:first-child::before {
    content: "";
  }
}
</style>
