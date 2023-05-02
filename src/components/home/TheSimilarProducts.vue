<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Navigation } from 'swiper'

defineProps<{
  varnishes: any[]
}>()

const swiperProps = {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    900: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
}
</script>

<template>
  <swiper
    v-bind="swiperProps"
    :freeMode="true"
    :navigation="true"
    :modules="[EffectFade, Navigation]"
    class="mySwiper"
  >
    <swiper-slide v-for="item in varnishes" :key="item.id" class="varnishes__item">
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
    </swiper-slide>
  </swiper>
</template>
