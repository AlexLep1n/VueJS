<template>
  <div class="blog__flex container">
    <div class="blog__articles">
      <div v-for="(article, index) in articles" :key="index" class="article">
        <h1 class="blog__heading">{{ article.heading }}</h1>
        <img
          class="blog__article-img"
          :src="article.imgSrc"
          :alt="article.imgAlt"
        />
        <div class="blog__article-img-info">
          <p class="blog__date">26 December,2022</p>
          <p class="blog__links">Interior / Home / Decore</p>
        </div>
        <p class="blog__content">
          {{ article.text }}
        </p>
      </div>
    </div>
    <div class="blog__tags"></div>
  </div>
</template>

<script>
export default {
  name: "BlogArticle",
  data() {
    return {
      articles: [
        {
          tag: "kitchen",
          heading: "Let’s Get Solution for Building Construction Work",
          imgSrc: "img/blog-kitchen-blue.png",
          imgAlt: "Kitchen",
          text: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
