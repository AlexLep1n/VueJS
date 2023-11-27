<template>
  <section class="project">
    <div class="project__flex container">
      <TabsPart @changeTab="selectTab"></TabsPart>
      <div class="project__cards">
        <div v-for="(project, index) in filterProjects" :key="index" class="project__card">
          <img :src="project.imgUrl" :alt="project.imgAlt" class="project__img">
          <div class="project__card-box">
            <div class="project__desc">
              <h4 class="project__heading">{{ project.heading }}</h4>
              <p class="project__breadcrumps">{{ project.breadcrumps }}</p>
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                <circle cx="35" cy="35" r="35" fill="#F4F0EC"/>
                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
      <PaginationPart></PaginationPart>
    </div>
  </section>
</template>

<script>
import TabsPart from '@/components/parts/TabsPart.vue'
import PaginationPart from '@/components/parts/PaginationPart.vue'

export default {
  name: 'ProjectsBlock',

  data () {
    return {
      projects: [
        {
          tab: 'Bed Room',
          imgUrl: './img/project/bedroom-left-1.jpg',
          imgAlt: 'Minimal Bedroom',
          heading: 'Minimal Bedroom',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Bed Room',
          imgUrl: './img/project/bedroom-right-1.jpg',
          imgAlt: 'Minimal Bedroom',
          heading: 'Minimal Bedroom',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Bed Room',
          imgUrl: './img/project/bedroom-left-2.jpg',
          imgAlt: 'Classic Minimal Bedroom',
          heading: 'Classic Minimal Bedroom',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Bed Room',
          imgUrl: './img/project/bedroom-right-2.jpg',
          imgAlt: 'Modern Bedroom',
          heading: 'Modern Bedroom',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Bed Room',
          imgUrl: './img/project/bedroom-left-3.jpg',
          imgAlt: 'Minimal Bedroom table',
          heading: 'Minimal Bedroom table',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Bed Room',
          imgUrl: './img/project/bedroom-right-3.jpg',
          imgAlt: 'System Table',
          heading: 'System Table',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Bed Room',
          imgUrl: './img/project/bedroom-left-4.jpg',
          imgAlt: 'Modern Room',
          heading: 'Modern Medroom',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Bed Room',
          imgUrl: './img/project/bedroom-right-4.jpg',
          imgAlt: 'Modern Room',
          heading: 'Modern Bedroom',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Bathroom',
          imgUrl: './img/project/bedroom-right-4.jpg',
          imgAlt: 'Bathroom',
          heading: 'Modern Bathroom',
          breadcrumps: 'Decor / Artchitecture'
        },
        {
          tab: 'Kitchan',
          imgUrl: './img/project/bedroom-left-3.jpg',
          imgAlt: 'Kitchan',
          heading: 'Modern Kitchan',
          breadcrumps: 'Decor / Artchitecture'
        }
      ],
      filterProjects: [],
      drawFlag: false
    }
  },

  beforeMount () {
    if (!this.drawFlag) {
      this.filterProjects = this.projects.filter(item => item.tab === 'Bathroom')
    } else {
      this.selectTab()
    }
  },
  methods: {
    selectTab (clickTab) {
      this.drawFlag = true
      this.filterProjects = this.projects.filter(item => item.tab === clickTab.tabName)
    }
  },

  components: {
    TabsPart,
    PaginationPart
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
  .project {
    margin-bottom: 200px;
    &__flex {
      @include df(center, center, 61px);
      flex-direction: column;
    }

    &__cards {
      @include df(flex-start, flex-start, 29px);
      flex-wrap: wrap;
      width: 100%;
    }

    &__card {
      @include df(center, center, 24px);
      flex-direction: column;
    }

    &__card-box {
      @include df(space-between, center, 0);
      width: 100%;
    }

    &__desc {
      @include df(center, flex-start, 4px);
      flex-direction: column;
    }

    &__heading {
      color: $headingColor;
      @include fsw($dmSerifD, 25px);
      line-height: 125%;
      letter-spacing: 0.5px;
    }

    &__breadcrumps {
      color: $txtColor;
      @include fsw($jostFf, 22px);
      line-height: 150%;
      letter-spacing: 0.22px;
    }

  }
</style>
