<template>
  <section class="results">
    <div class="results__flex container">
      <div class="results__item" v-for="(item, index) in results" :key="index">
        <h2 class="results__number">{{ item.number }}</h2>
        <p class="results__desc">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ResultsBlock",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
    ...mapGetters(["results"]),
  },
};
</script>

<style lang="scss" scoped></style>
