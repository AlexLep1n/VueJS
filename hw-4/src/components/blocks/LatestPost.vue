<template>
  <section class="post">
    <div class="container">
      <h2 class="post__title">Latest Post</h2>
      <div class="post__card">
        <img src="img/post-img.png" alt="kitchen" class="post__img">
        <div class="post__content">
          <h3 class="post__content-title">Low Cost Latest Invented Interior Designing Ideas</h3>
          <p class="post__content-first-txt">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
            dignissim
            maximus.posuere in.Contrary to popular belief.</p>
          <p class="post__content-second-txt">Lorem Ipsum is not simply random text. It has roots in a piece of
            classica.
          </p>
          <div class="post__date-box">
            <p class="post__date-txt">26 December,2022 </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
              <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
              <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'LatestPost',

  data () {
    return {

    }
  },

  mounted () {

  },

  methods: {

  }
}
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

  .post {
    margin-bottom: 150px;

    &__title {
      color: $headingColor;
      @include fsw($dmSerifD, 50px);
      line-height: 125%;
      letter-spacing: 1px;
      margin-bottom: 27px;
    }

    &__card {
      @include df(center, center, 65px);
      border: 1px solid #e7e7e7;
      border-radius: 62px;
      padding: 22px;
    }

    &__img {
      border: none;
      border-radius: 50px;
    }

    &__content {
      padding: 51px 34px 51px 0;
      text-align: left;
    }

    &__content-title {
      color: $headingColor;
      @include fsw($dmSerifD, 25px);
      line-height: 125%;
      letter-spacing: 0.5px;
      margin-bottom: 22px;
    }

    &__content-first-txt,
    &__content-second-txt {
      color: $txtColor;
      @include fsw($jostFf, 22px);
      line-height: 150%;
      letter-spacing: 0.22px;
      margin-bottom: 41px;
    }

    &__date-box {
      @include df(space-between, center, 0);
    }

    &__date-txt {
      color: $txtColor;
      @include fsw($jostFf, 16px);
      line-height: 150%;
      letter-spacing: 0.16px;
    }
  }
</style>
