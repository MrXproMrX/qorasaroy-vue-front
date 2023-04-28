<template>
  <div class="contacts">
    <section class="container">
      <div class="contacts__cart">
        <ul class="about__menu">
          <li>
            <RouterLink to="/" class="about__menu__link">Главная</RouterLink>
          </li>

          <li>
            <RouterLink to="/contacts" class="about__menu__link"> Контакты </RouterLink>
          </li>
        </ul>

        <div class="contacts__list">
          <section>
            <h2 class="products__title__h2">Контакты</h2>
            <ul class="contacts__address">
              <li>
                <h3 class="contacts__title__h3">
                  Адрес
                  <span>г. Ташкент, Алмазарский район, ул. Карасарай, дом 341А</span>
                </h3>
              </li>

              <li>
                <h3 class="contacts__title__h3">
                  График работы
                  <span>08:00 - 18:00</span>
                </h3>
              </li>

              <li>
                <h3 class="contacts__title__h3">
                  Телефон
                  <span>
                    <a href="tel:+998 (98) 128-05-12">+998 (98) 128-05-12</a>
                    <a href="tel:+998 (71) 228-07-36">+998 (71) 228-07-36</a>
                  </span>
                </h3>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="products__title__h2">Обратная связь</h2>
            <form action="#!" class="contacts__form">
              <input type="text" class="contacts__input" placeholder="Ваше имя" />
              <input type="tel" class="contacts__input" placeholder="Ваш телефон" />
              <textarea class="contacts__textarea" placeholder="Комментарий" />
              <button class="contacts__button" type="submit">Отправить</button>
            </form>
          </section>
        </div>
      </div>
    </section>

    <section class="container">
      <h4 class="contacts__title__h4">Мы на карте</h4>
    </section>

    <div class="contacts__maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6349.840775438888!2d69.3277196108845!3d41.314828803435574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef51d459fd8c1%3A0x37226c9cae6b3453!2z0J_QsNGA0LrQtdC90YLRgdC60LjQuSDQoNGL0L3QvtC6!5e0!3m2!1sru!2s!4v1682578604862!5m2!1sru!2s"
        width="600"
        height="450"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
