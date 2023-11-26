<template>
  <div>
    <HeaderComp></HeaderComp>
    <PageTitle :title="title" :imgUrl="imgBackgroundUrl"></PageTitle>
    <div class="project-page">
      <ProjectsBlock></ProjectsBlock>
    </div>
    <FooterComp></FooterComp>
  </div>
</template>

<script>

import HeaderComp from '@/components/blocks/HeaderComp.vue'
import PageTitle from '@/components/blocks/PageTitle.vue'
import ProjectsBlock from '@/components/blocks/ProjectsBlock.vue'
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
    ProjectsBlock,
    FooterComp
  }
}
</script>

<style lang="scss" scoped>
  .project-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 61px;
  }
</style>
