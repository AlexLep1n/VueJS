<template>
  <footer class="footer">
    <div class="footer__flex container">
      <div class="footer__info">
        <a href="index.html" class="footer__logo">
          <img src="img/nav__img.svg" alt="logo">
          <h3 class="nav__left-title">Interno</h3>
        </a>
        <p class="footer__info-txt">It is a long established fact that a reader will be distracted lookings.</p>
        <div class="footer__fa-links ">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <div class="footer__pages">
        <h4 class="footer__pages-heading">Pages</h4>
        <a href="#" class="footer__pages-link">Home</a>
        <a href="#" class="footer__pages-link">Project</a>
        <a href="#" class="footer__pages-link">Blog</a>
      </div>
      <div class="footer__contacts">
        <h4 class="footer__contacts-heading">Contact</h4>
        <p class="footer__contacts-info">55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p class="footer__contacts-info">contact@interno.com</p>
        <p class="footer__contacts-info">(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
