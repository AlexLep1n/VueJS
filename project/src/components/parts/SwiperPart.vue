<template>
  <Swiper :pagination="true">
    <SwiperSlide v-for="(item, index) in swiperProjectDetails" :key="index">
      <img :src="item.imgUrl" :alt="item.Alt" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { mapGetters } from "vuex";

export default {
  name: "ProjectSwiperPart",
  setup() {
    return {
      modules: [Pagination],
    };
  },

  methods: {},

  computed: {
    ...mapGetters(["swiperProjectDetails"]),
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style lang="scss" scoped>
// .swiper {
//   width: 100%;
//   height: 100%;
// }

// .swiper-slide {
//   text-align: center;
//   font-size: 18px;
//   background: #fff;

//   /* Center slide text vertically */
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
.swiper-slide img {
  border: none;
  border-radius: 70px;
}
</style>
