<script setup lang="ts">
defineProps<{
  allProducts: any[]
}>()
</script>

<template>
  <div class="allProducts__all__list">
    <div v-for="item in allProducts" :key="item.id" class="varnishes__item">
      <RouterLink :to="'/product/' + item.id">
        <div class="varnishes__img">
          <img :src="item.img" :alt="item.title" />
        </div>
        <h3 class="varnishes__title__h3">{{ item.title }}</h3>
        <div class="varnishes__item__list">
          <h4 class="varnishes__price">{{ item.price }} сум</h4>
          <button type="button" class="varnishes__basket">
            <img src="@/assets/img/icons/basket2.svg" :alt="item.price" />
          </button>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
