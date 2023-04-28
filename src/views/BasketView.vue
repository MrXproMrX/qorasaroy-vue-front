<template>
  <div class="basket">
    <section class="container">
      <div class="basket__cart">
        <ul class="basket__menu">
          <RouterLink to="/catalog" class="basket__menu__next">
            <span><font-awesome-icon icon="fas fa-angle-left"></font-awesome-icon></span>
            Назад
          </RouterLink>
        </ul>

        <div class="products__title__list">
          <h2 class="products__title__h2">Корзина</h2>
          <RouterLink class="products__all__link" to="#!">Очистить корзину</RouterLink>
        </div>

        <div class="basket__list">
          <table>
            <tr>
              <th>Наименование товара</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Итого</th>
            </tr>

            <tr v-for="item in varnishes" :key="item.id">
              <td>
                <div class="basket__list__img">
                  <div class="basket__img">
                    <img :src="item.img" :alt="item.id" />
                  </div>
                  <h2 class="basket__title__h2">{{ item.title }}</h2>
                </div>
              </td>

              <td>
                <div class="allProductsIn__quantity">
                  <button class="allProductsIn__quantity__button" @click="item.productsAmount--">
                    <font-awesome-icon icon="fas fa-minus"></font-awesome-icon>
                  </button>

                  <input type="text" v-model.number="item.productsAmount" />

                  <button class="allProductsIn__quantity__button" @click="item.productsAmount++">
                    <font-awesome-icon icon="fas fa-plus"></font-awesome-icon>
                  </button>
                </div>
              </td>

              <td>
                <h4 class="basket__title__h4">{{ item.price }} сум</h4>
              </td>

              <td>
                <h3 class="basket__title__h3">{{ item.price * item.productsAmount + max }} сум</h3>
              </td>

              <td>
                <button class="basket__delete">
                  <font-awesome-icon icon="fas fa-trash-alt"></font-awesome-icon>
                </button>
              </td>
            </tr>
          </table>
        </div>

        <div class="basket__checkout">
          <h2 class="basket__checkout__title">Общая сумма: <span>360 000 сум</span></h2>
          <RouterLink to="/checkout" class="allProductsIn__addToCart">Оформить заказ</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import varnishes from '@/data/varnishes'
export default {
  data() {
    return {
      varnishes,
      max: 0,
    }
  },
}
</script>
