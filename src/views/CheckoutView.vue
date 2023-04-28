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
        <div class="checkout__list">
          <h2 class="products__title__h2">Оформить заказ</h2>
          <form action="/payment" class="checkout__form">
            <input type="text" placeholder="Ваше имя" class="checkout__input" />
            <input type="tel" placeholder="Ваш телефон" class="checkout__input" />
            <input type="text" placeholder="Адрес доставки" class="checkout__input" />
            <button type="submit" class="checkout__button">Далее</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
