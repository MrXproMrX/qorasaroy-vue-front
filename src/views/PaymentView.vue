<template>
  <div class="checkout">
    <section class="container">
      <div class="checkout__cart">
        <ul class="basket__menu">
          <RouterLink to="/checkout" class="basket__menu__next">
            <span><font-awesome-icon icon="fas fa-angle-left"></font-awesome-icon></span>
            Назад
          </RouterLink>
        </ul>
        <div class="checkout__list">
          <h2 class="products__title__h2">Оформить заказ</h2>
          <form action="#!" class="checkout__form">
            <section class="checkout__form__list">
              <label class="input-wrap">
                <input type="checkbox" class="checkboxNone" />
                <span class="checkmark"></span>
                <img src="@/assets/img/payme.png" alt="payme" />
              </label>

              <label class="input-wrap">
                <input type="checkbox" class="checkboxNone" />
                <span class="checkmark"></span>
                <img src="@/assets/img/click.png" alt="payme" />
              </label>
            </section>
            <button type="submit" class="checkout__button">Оформить</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
