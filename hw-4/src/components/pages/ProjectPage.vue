<template>
  <div>
    <HeaderComp></HeaderComp>
    <PageTitle :title="title" :imgUrl="imgBackgroundUrl"></PageTitle>
    <TabsPart></TabsPart>
    <FooterComp></FooterComp>
  </div>
</template>

<script>

import HeaderComp from '@/components/blocks/HeaderComp.vue'
import PageTitle from '@/components/blocks/PageTitle.vue'
import TabsPart from '@/components/parts/TabsPart.vue'
import FooterComp from '@/components/blocks/FooterComp.vue'

export default {
  name: 'ProjectPage',

  data () {
    return {
      title: 'Our Project',
      imgBackgroundUrl: 'url(./img/project-page-title-background.jpg)'
    }
  },

  methods: {

  },

  components: {
    HeaderComp,
    PageTitle,
    TabsPart,
    FooterComp
  }
}
</script>

<style lang="scss" scoped>

</style>
