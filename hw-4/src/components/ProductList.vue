<template>
  <div>
    <h2>Вторая часть задания</h2>
    <ProductDetails v-for="(product, index) in productList" :key="index" :product-item="product"></ProductDetails>
  </div>
</template>

<script>

import ProductDetails from './ProductDetails.vue'

export default {
  name: 'ProductList',

  data () {
    return {
      productList: [
        {
          name: 'T-shirt',
          price: 12,
          available: true
        },
        {
          name: 'Jeans',
          price: 45,
          available: false
        },
        {
          name: 'Sneakers',
          price: 63,
          available: true
        }
      ]
    }
  },

  methods: {

  },

  components: { ProductDetails }
}
</script>

<style lang="scss" scoped>
h2 {
  font-style: 54px;
}
</style>
