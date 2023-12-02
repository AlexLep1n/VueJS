<template>
  <section class="project-details">
    <div class="project-details__flex container">
      <div class="project-details__desc">
        <h2 class="project-details__title">Minimal Look Bedrooms</h2>
        <p class="project-details__txt project-details__txt-above">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
          vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
          maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
          in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum
          vel lectus bibendum commodo.
        </p>
        <p class="project-details__txt">
          In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
          tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque
          arcu. Donec a pellentesque Cras erat enim, gravida non ante
          vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus
          vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
        </p>
      </div>
      <SwiperPart></SwiperPart>
    </div>
  </section>
</template>

<script>
import SwiperPart from "../parts/SwiperPart.vue";

export default {
  name: "ProjectDetailsBlock",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { SwiperPart },
};
</script>

<style lang="scss" scoped>
$dmSerifD: "DM Serif Display", serif;
$jostFf: "Jost", sans-serif;
$headingColor: #292f36;
$txtColor: #4d5053;

@mixin df($jc, $ai, $g) {
  display: flex;
  justify-content: $jc;
  align-items: $ai;
  gap: $g;
}

@mixin fsw($ff, $fs) {
  font-family: $ff;
  font-size: $fs;
  font-weight: 400;
}
.project-details {
  margin-bottom: 180px;

  &__flex {
    @include df(center, center, 100px);
    flex-direction: column;
  }

  &__desc {
    @include df(flex-start, center, 11px);
    flex-direction: column;
    max-width: 658px;
  }

  &__title {
    color: $headingColor;
    @include fsw($dmSerifD, 50px);
    line-height: 125%;
    letter-spacing: 1px;
  }

  &__txt {
    color: $txtColor;
    @include fsw($jostFf, 22px);
    line-height: 150%;
    letter-spacing: 0.22px;
    text-align: left;
  }

  &__txt-above {
    margin-bottom: 20px;
  }
}
</style>
