<template>
  <section class="not-found">
    <div class="not-found__flex container">
      <div class="not-found__content">
        <h1 class="not-found__title">404</h1>
        <h3 class="not-found__text">
          We are sorry, but the page you requested was not found
        </h3>
        <BlackButtonPart
          :link="'/'"
          :btn-text="'Back To Home'"
        ></BlackButtonPart>
      </div>
      <img
        src="../../../public/img/404-page.jpg"
        alt="page not found"
        class="not-found__img"
      />
    </div>
  </section>
</template>

<script>
import BlackButtonPart from "@/components/parts/BlackButtonPart.vue";
export default {
  name: "NotFoundBlock",

  data() {
    return {};
  },

  methods: {},

  components: {
    BlackButtonPart,
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

.not-found {
  &__flex {
    @include df(space-between, center, 81px);
  }

  &__content {
    @include df(center, flex-start, 0);
    flex-direction: column;
  }

  &__title {
    color: #cda274;
    @include fsw($dmSerifD, 250px);
    line-height: 125%;
    margin-bottom: 15px;
  }

  &__text {
    color: $txtColor;
    @include fsw($dmSerifD, 35px);
    line-height: 150%;
    letter-spacing: 0.35px;
    margin-top: -30px;
    margin-bottom: 23px;
    text-align: left;
    width: 569px;
  }

  &__img {
    border: none;
    border-radius: 0 0 0 353px;
  }
}
</style>
