<template>
  <div>
    <h3>{{ productItem.name }}</h3>
    <p>{{ productItem.price }}</p>
    <p>{{ productItem.available }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailsComp',
  props: ['productItem'],

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped></style>
