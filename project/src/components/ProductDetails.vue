<template>
  <div class="general">
    <h3>{{ productItem.name }}</h3>
    <div v-if="showDetails" class="details">
      <p>{{ formattedPrice }}</p>
      <p v-if="productItem.available">Available</p>
      <p v-else>Out of stock</p>
  </div>
    <button @click="toggleDetails">Show Details</button>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: ['productItem'],

  data () {
    return {
      showDetails: false
    }
  },

  methods: {
    toggleDetails () {
      this.showDetails = !this.showDetails
    }
  },

  computed: {
    formattedPrice () {
      return `$${this.productItem.price}`
    }
  }
}
</script>

<style lang="scss" scoped>
.general {
  font-size: 24px;
  margin-bottom: 40px;
}

h3 {
  margin: 10px 0;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 24px;
  margin-bottom: 10px;
}

button {
  font-size: 24px;
}
</style>
