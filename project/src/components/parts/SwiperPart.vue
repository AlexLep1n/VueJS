<template>
  <!-- <Swiper :pagination="true">
    <swiper-slide v-for="(item, index) in swiperProjectDetails" :key="index">
      <img :src="item.imgUrl" :alt="item.Alt" />
    </swiper-slide>
  </Swiper> -->
  <!-- <div>
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
  </div> -->
  <div class="swiper-container container">
    <!-- Обертка слайдов -->
    <div class="swiper-wrapper">
      <!-- Слайды -->
      <div
        class="swiper-slide"
        v-for="(slide, index) in swiperProjectDetails"
        :key="index"
      >
        <img :src="slide.imgUrl" :alt="slide.Alt" />
      </div>
    </div>
    <!-- Пагинация -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "swiper/vue";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

import { mapGetters } from "vuex";
import Swiper from "swiper";
import "@/../node_modules/swiper/swiper.css";
import "@/../node_modules/swiper/modules/navigation.css";
import "@/../node_modules/swiper/modules/pagination.css";

export default {
  name: "ProjectSwiperPart",

  methods: {},

  mounted() {
    new Swiper(".swiper-container", {
      // Параметры Swiper
      loop: true,
      slidesPerView: 1,
      spaceBetween: 3000,
      // Настройки для пагинации, навигационных кнопок и т.д.
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets: true,
      },
      // Дополнительные параметры...
    });
  },

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
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Центрирование содержимого слайдов */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
