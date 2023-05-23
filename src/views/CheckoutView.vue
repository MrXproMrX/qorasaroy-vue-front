<template>
  <div class="checkout">
    <section class="container">
      <div class="checkout__cart">
        <ul class="basket__menu">
          <RouterLink to="/basket" class="basket__menu__next">
            <span><font-awesome-icon icon="fas fa-angle-left"></font-awesome-icon></span>
            Назад
          </RouterLink>
        </ul>

        <div class="checkout__title__list">
          <h2 class="products__title__h2">Оформить заказ</h2>
        </div>

        <div class="checkout__list">
          <form class="checkout__form">
            <h3 class="checkout__title__h3">Адрес доставки</h3>

            <section class="checkout__list__address">
              <div class="checkout__item__address">
                <label class="input-wrap" for="address_1">
                  <h4 class="checkout__title__address">Садык Азимов 68</h4>
                  <input type="radio" name="address" id="address_1" class="checkboxNone" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div class="checkout__item__address">
                <label class="input-wrap" for="address_2">
                  <h4 class="checkout__title__address">Феруза 44</h4>
                  <input type="radio" name="address" id="address_2" class="checkboxNone" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div class="checkout__item__address">
                <label class="input-wrap" for="address_3">
                  <h4 class="checkout__title__address">Корасув 30</h4>
                  <input type="radio" name="address" id="address_3" class="checkboxNone" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </section>

            <input type="text" class="checkout__input" placeholder="Введите адрес" />

            <h4 class="checkout__title__h4">Сумма доставки до 20кг: <span>?</span> 0 сум</h4>

            <h3 class="checkout__title__h3">Время доставки</h3>

            <ul class="checkout__delivery">
              <li @click="delivery = 'today'" :class="{ action: delivery == 'today' }">
                <h6 class="checkout__delivery__date">сегодня <span>18 мая</span></h6>
              </li>

              <li @click="delivery = 'tomorrow'" :class="{ action: delivery == 'tomorrow' }">
                <h6 class="checkout__delivery__date">завтра <span>19 мая</span></h6>
              </li>
            </ul>

            <div class="checkout__delivery__list">
              <div class="checkout__delivery__item">
                <label class="input-wrap" for="time_1">
                  <section>
                    <input type="radio" name="time" id="time_1" class="checkboxNone" />
                    <span class="checkmark"></span>
                  </section>

                  <div class="checkout__delivery__time">
                    <h4 class="checkout__title__address">17:00 - 19:00</h4>
                    <h3 class="checkout__title__time">Доступно</h3>
                    <h5 class="checkout__button__time">Выберите</h5>
                  </div>
                </label>
              </div>

              <div class="checkout__delivery__item">
                <label class="input-wrap" for="time_2">
                  <section>
                    <input type="radio" name="time" id="time_2" class="checkboxNone" />
                    <span class="checkmark"></span>
                  </section>

                  <div class="checkout__delivery__time">
                    <h4 class="checkout__title__address">19:00 - 21:00</h4>
                    <h3 class="checkout__title__time">Доступно</h3>
                    <h5 class="checkout__button__time">Выберите</h5>
                  </div>
                </label>
              </div>

              <div class="checkout__delivery__item">
                <label class="input-wrap" for="time_3">
                  <section>
                    <input type="radio" name="time" id="time_3" class="checkboxNone" />
                    <span class="checkmark"></span>
                  </section>

                  <div class="checkout__delivery__time">
                    <h4 class="checkout__title__address">21:00 - 23:00</h4>
                    <h3 class="checkout__title__time">Доступно</h3>
                    <h5 class="checkout__button__time">Выберите</h5>
                  </div>
                </label>
              </div>
            </div>

            <h3 class="checkout__title__h3">Оплата</h3>

            <div class="checkout__payment">
              <div class="checkout__payment__item">
                <label class="input-wrap" for="payment_1">
                  <input
                    type="radio"
                    name="payment"
                    id="payment_1"
                    class="checkboxNone"
                    value="cash"
                    v-model="value"
                  />
                  <span class="checkmark"></span>
                  <h3 class="checkout__title__time">Наличные</h3>
                </label>
              </div>

              <div class="checkout__payment__item">
                <label class="input-wrap" for="payment_2">
                  <input
                    type="radio"
                    name="payment"
                    id="payment_2"
                    class="checkboxNone"
                    value="terminal"
                    v-model="value"
                  />
                  <span class="checkmark"></span>
                  <h3 class="checkout__title__time">Терминал</h3>
                </label>
              </div>

              <div class="checkout__payment__item">
                <label class="input-wrap" for="payment_3">
                  <input
                    type="radio"
                    name="payment"
                    id="payment_3"
                    class="checkboxNone"
                    value="online"
                    v-model="value"
                  />
                  <span class="checkmark"></span>
                  <h3 class="checkout__title__time">Онлайн</h3>
                </label>
              </div>
            </div>

            <template v-if="value == 'online'">
              <section class="checkout__form__list">
                <label class="input-wrap" for="pay_1">
                  <input type="radio" name="pay" id="pay_1" class="checkboxNone" />
                  <span class="checkmark"></span>
                  <img src="@/assets/img/payme.png" alt="payme" />
                </label>

                <label class="input-wrap" for="pay_2">
                  <input type="radio" name="pay" id="pay_2" class="checkboxNone" />
                  <span class="checkmark"></span>
                  <img src="@/assets/img/click.png" alt="payme" />
                </label>
              </section>
            </template>

            <section class="checkout__button__item">
              <button type="submit" class="checkout__button">Оформить</button>
            </section>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delivery: 'today',
      value: '',
    }
  },
}
</script>
