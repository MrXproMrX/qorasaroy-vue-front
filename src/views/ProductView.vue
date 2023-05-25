<template>
  <div class="allProductsIn">
    <section class="container">
      <div class="allProductsIn__cart">
        <ul class="about__menu">
          <li>
            <RouterLink to="/catalog" class="about__menu__link">Каталог</RouterLink>
          </li>
          <li>
            <RouterLink :to="'/product/' + product.id" class="about__menu__link">
              {{ product.title }}
            </RouterLink>
          </li>
        </ul>

        <div class="allProductsIn__list">
          <div class="allProductsIn__img">
            <img :src="product.img" :alt="product.title" />
          </div>

          <div class="allProductsIn__item">
            <h2 class="products__title__h2">{{ product.title }}</h2>

            <ul class="allProductsIn__menu">
              <li>
                <h3 class="allProductsIn__title__h3">Масса НЕТТО: <span>3кг ± 50 г</span></h3>
              </li>

              <li>
                <h3 class="allProductsIn__title__h3">
                  Время высыхания: <span>при t-20°C -24 часа</span>
                </h3>
              </li>

              <li>
                <h3 class="allProductsIn__title__h3">Расход: <span>180-200г/м²</span></h3>
              </li>

              <li>
                <h3 class="allProductsIn__title__h3">
                  Страна производства: <span>Узбекистан:</span>
                </h3>
              </li>
            </ul>

            <div class="allProductsIn__quantity">
              <button class="allProductsIn__quantity__button" @click="minus">
                <font-awesome-icon icon="fas fa-minus"></font-awesome-icon>
              </button>

              <input type="text" v-model.number="productsAmount" />

              <button class="allProductsIn__quantity__button" @click="plus">
                <font-awesome-icon icon="fas fa-plus"></font-awesome-icon>
              </button>
            </div>

            <h4 class="allProductsIn__price">{{ parseInt(product.price) * productsAmount }} сум</h4>
            <RouterLink to="/basket" class="allProductsIn__addToCart">
              В корзину
              <img src="@/assets/img/icons/basket2.svg" alt="basket" />
            </RouterLink>
          </div>
        </div>

        <h2 class="allProductsIn__title__h2">Меры предосторожности</h2>
        <div class="about__text">
          <p>
            Выполнять окрасочные работы хорошо проветриваемым помещении; для защиты рук применять
            резиновые перчатки. Запрещается курить и пользоваться открытым огнем. Гарантийный срок
            хранения-1 год со дня изготовления.
          </p>
        </div>

        <h2 class="allProductsIn__title__h2">Условия хранения</h2>
        <div class="about__text">
          <p>
            Хранить в плотно закрытой таре, в недоступном для детей месте. в проветриваемом
            помещении, в дали от отопительных приборов и прямых солнечных лучей, при температуре не
            ниже 0°CМасса НЕТТО: 3кг ± 50 г. Беречь от огня
          </p>
        </div>

        <div class="products__title__list">
          <h2 class="products__title__h2">Похожие товары</h2>
          <RouterLink class="products__all__link" to="/catalog">Смотреть все</RouterLink>
        </div>
        <section class="varnishes__list">
          <SimilarProducts :varnishes="varnishes" />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import SimilarProducts from '@/components/home/TheSimilarProducts.vue'
import varnishes from '@/data/varnishes'
import allProducts from '@/data/allProducts'
export default {
  data() {
    return {
      productsAmount: 0,
      varnishes: varnishes,
    }
  },

  components: {
    SimilarProducts,
  },

  computed: {
    product() {
      return allProducts.find((product) => product.id === +this.$route.params.id)
    },
  },

  methods: {
    plus() {
      this.productsAmount++
    },

    minus() {
      this.productsAmount--
      if (this.productsAmount < 1) {
        this.productsAmount = 0
      }
    },
  },
}
</script>
