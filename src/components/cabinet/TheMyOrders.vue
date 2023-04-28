<template>
  <div class="cabinet__myOrders__cart">
    <h2 class="products__title__h2">Мои заказы</h2>
    <ul class="cabinet__myOrders__menu">
      <li>
        <button
          class="cabinet__button"
          @click="active = 'currentOrders'"
          :class="{ active: active == 'currentOrders' }"
        >
          Текущие заказы
        </button>
      </li>

      <li>
        <button
          class="cabinet__button"
          @click="active = 'historyOfOrders'"
          :class="{ active: active == 'historyOfOrders' }"
        >
          История заказов
        </button>
      </li>
    </ul>

    <div class="cabinet__myOrders__list">
      <div class="cabinet__myOrders__currentOrders" v-if="active == 'currentOrders'">
        <table>
          <tr>
            <th>Продукт</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
          </tr>
          <tr>
            <td>Карасарай ПФ-115 “Супер белый” эмалевый блеск</td>
            <td>120 000 сум</td>
            <td>2</td>
            <td>240 000 сум</td>
          </tr>
          <tr>
            <td>Водно-дисперсионная “акриловая” краска</td>
            <td>120 000 сум</td>
            <td>1</td>
            <td>120 000 сум</td>
          </tr>
        </table>
      </div>

      <div class="cabinet__myOrders__historyOfOrders" v-else-if="active == 'historyOfOrders'">
        <table>
          <tr>
            <th>Продукт</th>
            <th>Цена</th>
            <th>Количество</th>
          </tr>
          <tr>
            <td>Карасарай ПФ-115 “Супер белый” эмалевый блеск</td>
            <td>120 000 сум</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Водно-дисперсионная “акриловая” краска</td>
            <td>120 000 сум</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'currentOrders',
    }
  },
}
</script>
