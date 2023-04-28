<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/effect-fade'

import productsItem from '@/components/home/TheProducts.vue'
import products from '@/data/products'
import VarnishesItem from '@/components/home/TheVarnishes.vue'
import varnishes from '@/data/varnishes'
import WaterBasedItem from '@/components/home/TheWaterBased.vue'
import waterBased from '@/data/waterBased'
import ConstructionItem from '@/components/home/TheConstruction.vue'
import construction from '@/data/construction'
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

        <div class="products__news">
          <div class="products__news__img">
            <img src="@/assets/img/productsFon.png" alt="productsFon" />
          </div>

          <div class="products__news__list">
            <h2 class="products__news__title">Водоэмульсионные краски</h2>
            <div class="products__news__text">
              <p>В наличии</p>
            </div>
            <RouterLink to="#!" class="products__news__link">Каталог</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Product Categories end -->

  <!-- paints and varnishes start -->

  <div class="varnishes">
    <section class="container">
      <div class="varnishes__car">
        <div class="products__title__list">
          <h2 class="products__title__h2">Лакокрасочные материалы</h2>
          <RouterLink class="products__all__link" to="#!">Смотреть все</RouterLink>
        </div>
        <div class="varnishes__list"><VarnishesItem :varnishes="varnishes" /></div>

        <div class="products__news">
          <div class="products__news__img">
            <img src="@/assets/img/varnishesFon.png" alt="productsFon" />
          </div>

          <div class="products__news__list">
            <h2 class="products__news__title">Электротехнические товары</h2>
            <div class="products__news__text">
              <p>В наличии</p>
            </div>
            <RouterLink to="#!" class="products__news__link">Каталог</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- paints and varnishes end -->

  <!-- Water-based paints -->

  <div class="varnishes">
    <section class="container">
      <div class="varnishes__car">
        <div class="products__title__list">
          <h2 class="products__title__h2">Водоэмульсионные краски</h2>
          <RouterLink class="products__all__link" to="#!">Смотреть все</RouterLink>
        </div>
        <div class="varnishes__list"><WaterBasedItem :waterBased="waterBased" /></div>

        <div class="products__news">
          <div class="products__news__img">
            <img src="@/assets/img/waterBasedFon.png" alt="productsFon" />
          </div>

          <div class="products__news__list">
            <h2 class="products__news__title">Арматура высокого качества</h2>
            <div class="products__news__text">
              <p>В наличии</p>
            </div>
            <RouterLink to="#!" class="products__news__link">Каталог</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Water-based paints -->

  <!-- Construction Materials paints -->

  <div class="varnishes">
    <section class="container">
      <div class="varnishes__car">
        <div class="products__title__list">
          <h2 class="products__title__h2">Водоэмульсионные краски</h2>
          <RouterLink class="products__all__link" to="#!">Смотреть все</RouterLink>
        </div>
        <div class="varnishes__list"><ConstructionItem :construction="construction" /></div>
        <div class="varnishes__all">
          <RouterLink to="#!" class="varnishes__all__link">
            Показать еще
            <span><font-awesome-icon icon="fas fa-chevron-down" /></span>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>

  <!-- Construction Materials paints -->
</template>
