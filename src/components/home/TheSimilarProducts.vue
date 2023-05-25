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
      <div class="varnishes__basket__cart">
        <button
          type="button"
          class="varnishes__basket"
          @click="item.productsAmount++"
          v-if="item.productsAmount <= 0"
        >
          <img src="@/assets/img/icons/basket2.svg" :alt="item.price" />
        </button>

        <div class="allProductsIn__quantity" v-if="item.productsAmount >= 1">
          <button
            class="allProductsIn__quantity__button"
            @click="item.productsAmount--"
            v-if="item.productsAmount > 1"
          >
            <font-awesome-icon icon="fas fa-minus"></font-awesome-icon>
          </button>

          <button
            class="allProductsIn__quantity__delete"
            v-if="item.productsAmount <= 1"
            @click="item.productsAmount--"
          >
            <font-awesome-icon icon="fas fa-trash-alt"></font-awesome-icon>
          </button>

          <input type="text" v-model.number="item.productsAmount" />

          <button class="allProductsIn__quantity__button" @click="item.productsAmount++">
            <font-awesome-icon icon="fas fa-plus"></font-awesome-icon>
          </button>
        </div>
      </div>
      <RouterLink :to="'/product/' + item.id">
        <div class="varnishes__img">
          <img :src="item.img" :alt="item.title" />
        </div>
        <h3 class="varnishes__title__h3">{{ item.title }}</h3>
        <div class="varnishes__item__list">
          <h4 class="varnishes__price">{{ item.price }} сум</h4>
        </div>
      </RouterLink>
    </swiper-slide>
  </swiper>
</template>
