<script setup lang="ts">
defineProps<{
  products: any[]
}>()
</script>

<template>
  <div class="products__item" v-for="item in products" :key="item.id">
    <RouterLink to="#!">
      <div class="products__img">
        <img :src="item.img" :alt="item.title" />
      </div>
      <h3 class="products__title__h3">{{ item.title }}</h3>
    </RouterLink>
  </div>
</template>
