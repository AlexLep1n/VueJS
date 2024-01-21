<template>
  <header class="header header_padding">
    <nav class="nav nav__flex container">
      <router-link to="/" class="nav__left">
        <img src="img/nav__img.svg" alt="logo" />
        <h3 class="nav__left-title">Interno</h3>
      </router-link>
      <div class="nav__right">
        <router-link to="/" class="nav__right-link">Home</router-link>
        <router-link to="/project" class="nav__right-link">Project</router-link>
        <router-link to="/blog" class="nav__right-link">Blog</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComp",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.header_padding {
  margin: 44px 0;
}
</style>
