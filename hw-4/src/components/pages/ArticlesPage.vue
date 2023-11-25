<template>
  <div>
    <HeaderComp></HeaderComp>
    <PageTitle :title="title" :imgUrl="imgBackgroundUrl"></PageTitle>
    <LatestPost></LatestPost>
    <ArticlesComp></ArticlesComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from '@/components/blocks/HeaderComp.vue'
import PageTitle from '@/components/blocks/PageTitle.vue'
import LatestPost from '@/components/blocks/LatestPost.vue'
import ArticlesComp from '@/components/blocks/ArticlesComp.vue'
import FooterComp from '@/components/blocks/FooterComp.vue'

export default {
  name: 'ArticlesPage',

  data () {
    return {
      title: 'Articles & News',
      imgBackgroundUrl: 'url(./img/articles-page-title-background.jpg)'
    }
  },

  methods: {

  },

  components: {
    HeaderComp,
    PageTitle,
    LatestPost,
    ArticlesComp,
    FooterComp
  }
}
</script>

<style scoped>

</style>
