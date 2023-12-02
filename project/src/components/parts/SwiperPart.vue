<template>
  <!-- <Swiper :pagination="true">
    <swiper-slide v-for="(item, index) in swiperProjectDetails" :key="index">
      <img :src="item.imgUrl" :alt="item.Alt" />
    </swiper-slide>
  </Swiper> -->
  <div>
    <img
      class="swipper__img"
      :src="swiperProjectDetails[0].imgUrl"
      :alt="swiperProjectDetails[0].imgAlt"
    />
    <div class="pagination">
      <i class="fa-regular fa-circle"></i>
      <i class="fa-regular fa-circle"></i>
      <i class="fa-regular fa-circle"></i>
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import { mapGetters } from "vuex";

export default {
  name: "ProjectSwiperPart",
  // setup() {
  //   return {
  //     modules: [Pagination],
  //   };
  // },

  methods: {},

  computed: {
    ...mapGetters(["swiperProjectDetails"]),
  },
  components: {
    // Swiper,
    // SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
.swipper {
  &__img {
    border: none;
    border-radius: 70px;
    margin-bottom: 10px;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
