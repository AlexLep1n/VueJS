<template>
  <header class="header header_padding">
    <nav class="nav nav__flex container">
      <a href="index.html" class="nav__left">
        <img src="img/nav__img.svg" alt="logo">
        <h3 class="nav__left-title">Interno</h3>
      </a>
      <div class="nav__right">
        <a href="#" class="nav__right-link">Home</a>
        <a href="#" class="nav__right-link">Project</a>
        <a href="articles.html" class="nav__right-link">Blog</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComp',

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
.header_padding {
  margin: 44px 0;
}
</style>
