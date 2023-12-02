<template>
  <div>
    <HeaderPage></HeaderPage>
    <BannerComp :banner-url="banner"></BannerComp>
    <BlogComp></BlogComp>
    <FooterPage></FooterPage>
  </div>
</template>

<script>

import HeaderPage from '@/components/blocks/HeaderPage.vue'
import BannerComp from '@/components/blocks/BannerComp.vue'
import BlogComp from '@/components/blocks/BlogComp.vue'
import FooterPage from '@/components/blocks/FooterPage.vue'

export default {
  name: 'BlogPage',
  data () {
    return {
      banner: 'url(./img/blog-banner.jpg)'
    }
  },
  methods: {
  },

  components: {
    HeaderPage,
    BannerComp,
    BlogComp,
    FooterPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
