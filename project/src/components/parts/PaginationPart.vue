<template>
  <div class="pagination">
    <div class="pagination__flex">
      <div
        v-for="page in paginationCount"
        :key="page"
        class="pagination__link"
        @click="selectPage(page)"
      >
        <router-link :to="`/blog/${page}`">0{{ page }}</router-link>
      </div>
      <div @click="nextPage()">
        <router-link :to="`/blog/${currentPage}`" class="pagination__arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path
              d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
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
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "PaginationPart",

  data() {
    return {};
  },
  mounted() {},

  methods: {
    ...mapMutations(["SELECTED_PAGE", "NEXT_PAGE"]),
    selectPage(page) {
      this.SELECTED_PAGE(page);
    },
    nextPage() {
      this.NEXT_PAGE();
    },
  },

  computed: {
    ...mapGetters(["paginationCount", "currentPage"]),
  },
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

.pagination {
  @include df(center, center, 0);

  &__flex {
    @include df(center, center, 20px);
    width: 268px;
  }

  &__link {
    color: $txtColor;
    @include fsw($jostFf, 16px);
    font-weight: 500;
    line-height: 150%;
    border: 1px solid #cda274;
    padding: 13px 15px 12px 17px;
    border-radius: 100px;
  }

  &__link:first-of-type {
    border: none;
    background-color: #f4f0ec;
    padding: 14px 17px 14px 18px;
  }
}
</style>
