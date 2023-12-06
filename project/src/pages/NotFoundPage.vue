<template>
  <div>
    <HeaderComp></HeaderComp>
    <NotFoundBlock></NotFoundBlock>
  </div>
</template>

<script>
import HeaderComp from "@/components/blocks/HeaderComp.vue";
import NotFoundBlock from "@/components/blocks/NotFoundBlock.vue";

export default {
  name: "NotFoundPage",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { HeaderComp, NotFoundBlock },
};
</script>

<style lang="scss" scoped></style>
