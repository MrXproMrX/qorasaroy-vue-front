<template>
  <div class="blogIn">
    <section class="container">
      <div class="blogIn__cart">
        <ul class="about__menu">
          <li>
            <RouterLink to="/blog" class="about__menu__link">Блог</RouterLink>
          </li>

          <li>
            <RouterLink :to="'/blogs/' + blogIn.id" class="about__menu__link">
              {{ blogIn.title }}
            </RouterLink>
          </li>
        </ul>

        <h2 class="products__title__h2">{{ blogIn.title }}</h2>

        <h4 class="blogIn__date">{{ blogIn.data }}</h4>

        <div class="blogIn__list clearfix">
          <div class="blogIn__img">
            <img :src="blogIn.img" :alt="blogIn.title" />
          </div>

          <div class="about__text" v-html="blogIn.text"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import blog from '@/data/blog'
export default {
  computed: {
    blogIn() {
      return blog.find((blogIn) => blogIn.id === +this.$route.params.id)
    },
  },
}
</script>
