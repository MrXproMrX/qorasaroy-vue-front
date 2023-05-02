<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/effect-fade'

import productsItem from '@/components/home/TheProducts.vue'
import products from '@/data/products'
import TheProductsList from '@/components/home/TheProductsList.vue'
import varnishes from '@/data/allProductsList'
</script>

<template>
  <!-- slider start -->

  <div class="slider">
    <section class="container">
      <div class="slider__cart">
        <div class="slider__list">
          <swiper
            :navigation="true"
            effect="fade"
            :modules="[EffectFade, Navigation]"
            class="mySwiper"
          >
            <swiper-slide class="slider__item">
              <div class="slider__img">
                <img src="@/assets/img/slick_1.png" alt="slider" />
              </div>
              <div class="slider__item__text">
                <h1 class="slider__title__h1">Лакокрасочная продукция</h1>
                <div class="slider__text">
                  <p>Высокого качества</p>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="slider__item">
              <div class="slider__img">
                <img src="@/assets/img/slick_3.jpg" alt="slider" />
              </div>
              <div class="slider__item__text">
                <h1 class="slider__title__h1">Высокого качества</h1>
                <div class="slider__text">
                  <p>Лакокрасочная продукция</p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </div>

  <!-- slider end -->

  <!-- Product Categories start -->

  <div class="products">
    <section class="container">
      <div class="products__cart">
        <div class="products__title__list">
          <h2 class="products__title__h2">Категории продукции</h2>
          <RouterLink class="products__all__link" to="#!">Все категории</RouterLink>
        </div>

        <div class="products__list">
          <productsItem :products="products" />
        </div>
      </div>
    </section>
  </div>

  <!-- Product Categories end -->

  <!-- Products start -->

  <div class="varnishes__all__products">
    <TheProductsList :varnishes="varnishes"></TheProductsList>
    <section class="container">
      <div class="varnishes__all">
        <RouterLink to="#!" class="varnishes__all__link">
          Показать еще
          <span><font-awesome-icon icon="fas fa-chevron-down" /></span>
        </RouterLink>
      </div>
    </section>
  </div>

  <!-- Products start -->
</template>
