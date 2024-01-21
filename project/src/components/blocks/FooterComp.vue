<template>
  <footer class="footer">
    <div class="footer__flex container">
      <div class="footer__info">
        <a href="index.html" class="footer__logo">
          <img src="img/nav__img.svg" alt="logo" />
          <h3 class="nav__left-title">Interno</h3>
        </a>
        <p class="footer__info-txt">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__fa-links">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <div class="footer__pages">
        <h4 class="footer__pages-heading">Pages</h4>
        <router-link to="/" class="footer__pages-link">Home</router-link>
        <router-link to="/project" class="footer__pages-link"
          >Project</router-link
        >
        <router-link to="/blog" class="footer__pages-link">Blog</router-link>
      </div>
      <div class="footer__contacts">
        <h4 class="footer__contacts-heading">Contact</h4>
        <p class="footer__contacts-info">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p class="footer__contacts-info">contact@interno.com</p>
        <p class="footer__contacts-info">(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp",

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
.footer {
  margin-bottom: 118px;
  &__flex {
    @include df(space-between, flex-start, 0);
  }

  &__info {
    width: 393px;
    margin-right: 101px;
  }

  &__logo {
    @include df(flex-start, center, 10px);
    margin-bottom: 18px;
  }

  &__info-txt {
    color: $txtColor;
    @include fsw($jostFf, 22px);
    line-height: 150%; /* 24px */
    letter-spacing: 0.22px;
    margin-bottom: 31px;
    text-align: left;
  }

  &__fa-links {
    display: flex;
    gap: 54px;
  }

  .fa-twitter,
  .fa-linkedin-in {
    font-size: 20px;
  }

  &__pages {
    @include df(space-between, flex-start, 0);
    flex-direction: column;
    margin-right: 303px;
  }

  &__pages-heading {
    color: $headingColor;
    @include fsw($dmSerifD, 25px);
    line-height: 125%; /* 31.25px */
    margin-bottom: 10px;
  }

  &__pages-link {
    color: $txtColor;
    @include fsw($jostFf, 22px);
    line-height: 300%;
    letter-spacing: 0.22px;
  }

  &__contacts {
    @include df(space-between, flex-start, 0);
    flex-direction: column;
    width: 258px;
  }

  &__contacts-heading {
    color: $headingColor;
    @include fsw($dmSerifD, 25px);
    line-height: 125%;
    margin-bottom: 26px;
  }

  &__contacts-info {
    color: $txtColor;
    @include fsw($jostFf, 22px);
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-bottom: 27px;
    text-align: left;
  }
}
</style>
