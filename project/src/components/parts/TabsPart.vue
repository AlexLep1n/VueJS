<template>
  <div class="tabs">
    <button v-for="(tab, index) in tabs" :key="index" :class="{tab_active: tab.clicked, tab: !tab.clicked}" @click="clickTab(index)">{{ tab.tabName }}</button>
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
          clicked: true
        },
        {
          tabName: 'Bed Room',
          clicked: false
        },
        {
          tabName: 'Kitchan',
          clicked: false
        },
        {
          tabName: 'Living Area',
          clicked: false
        }
      ],
      currentTabName: 'Bathroom',
      currentTabIndex: 0
    }
  },

  methods: {
    clickTab (index) {
      this.currentTabName = this.tabs[index].tabName
      if (index !== this.currentTabIndex) {
        this.tabs[index].clicked = true
        this.tabs[this.currentTabIndex].clicked = false
        this.currentTabIndex = index
      } else {
        this.tabs[index].clicked = true
      }
      const data = {
        tabName: this.currentTabName
      }
      this.$emit('changeTab', data)
    }
  }

  // computed: {
  //   filteredTabs () {
  //     if (this.clickTab()) {
  //       return this.clickTab()
  //     } else {
  //       return this.tabs
  //     }
  //   }
  // }
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
  @include df(space-between, center, 0);
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
