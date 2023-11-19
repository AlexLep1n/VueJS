<template>
  <div class="blog">
    <div class="blog__flex container">
      <div class="blog__articles">
        <div
          v-for="(article, index) in selectedArticles"
          :key="index"
          class="blog__article"
        >
          <h1 class="blog__heading">{{ article.heading }}</h1>
          <img
            class="blog__article-img"
            :src="article.imgSrc"
            :alt="article.imgAlt"
          />
          <div class="blog__article-img-info">
            <p class="blog__date">{{ article.postDate }}</p>
            <p class="blog__links">Interior / Home / Decore</p>
          </div>
          <p class="blog__content">
            {{ article.text }}
          </p>
        </div>
      </div>
      <div class="blog__tags">
        <h4 class="blog__tags-heading">Tags</h4>
        <div class="blog__tags-box">
          <button
            v-for="(tag, index) in tags"
            :key="index"
            @click="filterArticles(index)"
            :class="{ blog__tag: !tag.clicked, blog__tag_active: tag.clicked }"
          >
            {{ tag.tagName }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogArticle",
  data() {
    return {
      articles: [
        {
          tag: "Kitchen",
          heading: "Let’s Get Solution for Building Construction Work",
          imgSrc: "img/blog-kitchen-blue.png",
          imgAlt: "Kitchen",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          postDate: "26 December,2022",
        },
        {
          tag: "Kitchen",
          heading: "Design sprints are great",
          imgSrc: "img/blog-kitchen-white.png",
          imgAlt: "Kitchen",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
          postDate: "9 September,2023",
        },
        {
          tag: "Bedroom",
          heading: "Let’s Talk about Our Bedroom",
          imgSrc:
            "https://foyr.com/learn/wp-content/uploads/2021/09/master-bedroom-essentials.png",
          imgAlt: "Kitchen",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          postDate: "2 July,2021",
        },
        {
          tag: "Bedroom",
          heading: "Introduce New Solution for Bedroom",
          imgSrc:
            "https://www.oppeinhome.com/upload/images/ueditor/20230619/best-master-bedroom-ideas-for-your-home-2.webp",
          imgAlt: "Kitchen",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          postDate: "17 May,2023",
        },
        {
          tag: "Building",
          heading: "The Best Buildings Ever",
          imgSrc:
            "https://oksagen.ua/wp-content/uploads/2020/10/burlingame-residence-5-800x467.jpg",
          imgAlt: "Building",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          postDate: "7 April,2020",
        },
        {
          tag: "Architecture",
          heading: "Amazing Architecture",
          imgSrc:
            "https://media.architecturaldigest.com/photos/5af3192d99371749a05b24db/4:3/w_2844,h_2133,c_limit/Metropol%20Parasol.jpg",
          imgAlt: "Architecture",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          postDate: "23 February,2022",
        },
        {
          tag: "Architecture",
          heading: "Contemporary Architecture",
          imgSrc:
            "https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg",
          imgAlt: "Architecture",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          postDate: "11 August,2021",
        },
        {
          tag: "Architecture",
          heading: "Heart-winning Architecture",
          imgSrc:
            "https://images.adsttc.com/media/images/63ec/fa8d/e8da/b04c/2830/40bc/newsletter/copyrights-for-architectural-imagery-in-the-ai-era_6.jpg?1676475030",
          imgAlt: "Architecture",
          text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
          Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
          postDate: "18 May,2021",
        },
      ],

      tags: [
        {
          tagName: "Kitchen",
          clicked: true,
        },
        {
          tagName: "Bedroom",
          clicked: false,
        },
        {
          tagName: "Building",
          clicked: false,
        },
        {
          tagName: "Architecture",
          clicked: false,
        },
        {
          tagName: "Kitchen Planning",
          clicked: false,
        },
      ],
      currentTagName: "Kitchen",
      currentTagIndex: 0,
    };
  },
  methods: {
    filterArticles(index) {
      this.currentTagName = this.tags[index].tagName;
      if (index != this.currentTagIndex) {
        this.tags[index].clicked = true;
        this.tags[this.currentTagIndex].clicked = false;
        this.currentTagIndex = index;
      } else {
        this.tags[index].clicked = true;
      }
    },
  },
  computed: {
    selectedArticles() {
      return this.articles.filter((item) => item.tag === this.currentTagName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.blog {
  margin-bottom: 96px;

  &__flex {
    @include df(space-between, flex-start, 52px);
  }

  &__articles {
    @include df(center, center, 35px);
    flex-direction: column;
  }

  &__article {
    @include df(center, flex-start, 0);
    flex-direction: column;
    max-width: 799px;
  }

  &__heading {
    color: $headingColor;
    @include fsw($dmSerifD, 50px);
    line-height: 125%;
    letter-spacing: 1px;
    max-width: 684px;
    margin-bottom: 11px;
  }

  &__article-img {
    border: none;
    border-radius: 50px;
    margin-bottom: 46px;
    height: 539px;
    width: 799px;
  }

  &__article-img-info {
    @include df(space-between, center, 409px);
    margin-bottom: 48px;
  }

  &__date,
  &__links {
    color: $txtColor;
    @include fsw($jostFf, 16px);
    line-height: 150%;
    letter-spacing: 0.16px;
  }

  &__content {
    color: $txtColor;
    @include fsw($jostFf, 22px);
    line-height: 150%;
    letter-spacing: 0.22px;
  }

  &__tags-heading {
    color: $dmSerifD;
    @include fsw($dmSerifD, 25px);
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  &__tags {
    width: 25%;
  }

  &__tags-box {
    @include df(flex-start, center, 10px);
    flex-wrap: wrap;
  }

  &__tag {
    color: $txtColor;
    @include fsw($jostFf, 18px);
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 9px 30px;
    border: none;
    border-radius: 10px;
    background: #f4f0ec;
    cursor: pointer;
  }

  &__tag_active {
    color: #fff;
    @include fsw($jostFf, 18px);
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 9px 30px;
    border: none;
    border-radius: 10px;
    background: $headingColor;
    cursor: pointer;
  }
}
</style>
