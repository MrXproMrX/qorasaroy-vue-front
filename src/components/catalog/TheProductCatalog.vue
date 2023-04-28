<template>
  <div class="allProducts__categories">
    <div class="allProducts__categories__cart">
      <button class="allProducts__categories__button" @click="allProducts = !allProducts">
        <font-awesome-icon icon="fas fa-bars" />
      </button>
      <h3 class="allProducts__categories__title">Каталог продукции</h3>
    </div>

    <ul
      class="allProducts__categories__menu"
      :class="{ productsActive: allProducts == true, productsNoActive: allProducts == false }"
    >
      <li v-for="item in categories" :key="item.id">
        <RouterLink to="#!" class="allProducts__categories__link" :class="{ active: item.id == 1 }">
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['categories'],
  data() {
    return {
      allProducts: false,
    }
  },
}
</script>
