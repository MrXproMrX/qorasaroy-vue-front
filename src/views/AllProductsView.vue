<script setup lang="ts">
import TheCatalogItem from '@/components/catalog/TheCatalogItem.vue'
import allProducts from '@/data/allProducts'
import TheProductCatalog from '@/components/catalog/TheProductCatalog.vue'
import categories from '@/data/allProductsCategories'
import ThePrice from '@/components/catalog/ThePrice.vue'
</script>

<template>
  <div class="allProducts">
    <section class="container">
      <div class="allProducts__cart">
        <ul class="about__menu">
          <li>
            <RouterLink to="/" class="about__menu__link">Главная</RouterLink>
          </li>

          <li>
            <RouterLink to="/catalog" class="about__menu__link">Каталог</RouterLink>
          </li>
        </ul>

        <div class="allProducts__list">
          <aside class="allProducts__aside">
            <ThePrice />
            <TheProductCatalog :categories="categories" />
          </aside>
          <div class="allProducts__item__cart">
            <h2 class="products__title__h2">Вся продукция</h2>

            <TheCatalogItem :all-products="allProducts" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
