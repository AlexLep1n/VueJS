<template>
  <section class="projects">
    <div class="container">
      <div class="projects__desc">
        <h2 class="projects__heading">Follow Our Projects</h2>
        <p class="projects__txt">
          It is a long established fact that a reader will be distracted by the
          of readable content of page lookings at its layouts points.
        </p>
      </div>
      <div class="projects__cards">
        <div
          class="projects__card"
          v-for="(project, index) in mainProjects"
          :key="index"
        >
          <img
            class="projects__img projects__img-top-left"
            :src="project.imgUrl"
            :alt="project.imgAlt"
          />
          <div class="projects__card-box">
            <div class="projects__card-desc">
              <h3 class="projects__card-heading">{{ project.heading }}</h3>
              <p class="projects__card-txt">{{ project.breadcrumps }}</p>
            </div>
            <router-link to="/project-details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
              >
                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                <path
                  d="M32 44L40 35L32 26"
                  stroke="#292F36"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MainProjectsBlock",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  computed: {
    ...mapGetters(["mainProjects"]),
  },
};
</script>

<style lang="scss" scoped></style>
