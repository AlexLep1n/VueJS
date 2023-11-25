<template>
  <div class="tabs">
    <button v-for="(tab, index) in tabs" :key="index" :class="{tab_active: tab.clicked, tab: !tab.clicked}">{{ tab.tabName }}</button>
  </div>
</template>

<script>
export default {
  name: 'TabsPart',

  data () {
    return {
      tabs: [
        {
          tabName: 'Bathroom',
          clicked: false
        },
        {
          tabName: 'Bed Room',
          clicked: true
        },
        {
          tabName: 'Kitchan',
          clicked: false
        },
        {
          tabName: 'Living Area',
          clicked: false
        }
      ]
    }
  },

  methods: {

  }
}
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

 .tabs {
  @include df(space-between, center, 96px);
  border: 1px solid #CDA274;
  border-radius: 18px;
  width: 880px;
 }

 .tab {
  color: $headingColor;
  @include fsw($jostFf, 18px);
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
  padding: 26px 66px;
  border: none;
  border-radius: 18px;
  background-color: #FFF;
  cursor: pointer;
 }

 .tab_active {
  color: #FFF;
  @include fsw($jostFf, 18px);
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
  padding: 26px 66px;
  border: none;
  border-radius: 18px;
  background-color: #CDA274;
  cursor: pointer;
 }
</style>
