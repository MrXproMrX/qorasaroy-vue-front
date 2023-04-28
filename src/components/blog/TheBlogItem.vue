<script lang="ts" setup>
defineProps<{
  blogList: any[]
}>()
</script>
<template>
  <div class="blog__item" v-for="item in blogList" :key="item.id">
    <RouterLink :to="'/blogs/' + item.id">
      <div class="blog__img">
        <img :src="item.img" :alt="item.title" />
      </div>
      <h4 class="blog__data">{{ item.data }}</h4>
      <h3 class="blog__title__h3">{{ item.title }}</h3>
    </RouterLink>
  </div>
</template>
