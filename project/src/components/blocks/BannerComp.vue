<template>
    <section class="banner" :style="{'background-image': bannerUrl}">
    </section>
</template>

<script>
export default {
  name: 'BannerComp',

  props: ['bannerUrl'],
  data () {
    return {

    }
  },

  methods: {

  }
}
</script>

<style lang="scss" scoped>

.banner {
  background-repeat: no-repeat;
  background-size: cover;
  height: 351px;
  margin-bottom: 200px;
}
</style>
