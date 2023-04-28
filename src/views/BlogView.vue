<script setup lang="ts">
import blogItem from '@/components/blog/TheBlogItem.vue'
import blog from '@/data/blog'
import ThePagination from '@/components/ThePagination.vue'
</script>

<template>
  <div class="blog">
    <section class="container">
      <div class="blog__cart">
        <ul class="about__menu">
          <li>
            <RouterLink to="/" class="about__menu__link">Главная</RouterLink>
          </li>

          <li>
            <RouterLink to="/blog" class="about__menu__link">Блог</RouterLink>
          </li>
        </ul>
        <h2 class="products__title__h2">Блог</h2>
        <div class="blog__list">
          <blogItem :blogList="blog"></blogItem>
        </div>
        <ThePagination></ThePagination>
      </div>
    </section>
  </div>
</template>
