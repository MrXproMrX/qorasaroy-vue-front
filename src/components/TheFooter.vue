<template>
  <footer>
    <div class="footer">
      <section class="container">
        <div class="footer__cart">
          <div class="footer__list">
            <div class="footer__list__item">
              <div class="footer__item">
                <h4 class="footer__title__h4">Телефон</h4>
                <ul class="footer__lict__tel">
                  <li>
                    <a class="footer__link__tel" href="tel:+998 (98) 128-05-12">
                      +998 (98) 128-05-12
                    </a>
                  </li>

                  <li>
                    <a class="footer__link__tel" href="tel:+998 (71) 228-07-36">
                      +998 (71) 228-07-36
                    </a>
                  </li>
                </ul>
              </div>

              <div class="footer__item">
                <h4 class="footer__title__h4">соц сети</h4>
                <ul class="footer__lict__icons">
                  <li>
                    <a href="#!" target="_blank" class="footer__icons__link">
                      <font-awesome-icon icon="fab fa-instagram"></font-awesome-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#!" target="_blank" class="footer__icons__link">
                      <font-awesome-icon icon="fab fa-facebook-f"></font-awesome-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#!" target="_blank" class="footer__icons__link">
                      <font-awesome-icon icon="fab fa-telegram-plane"></font-awesome-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer__cart__list">
              <ul class="footer__menu">
                <li>
                  <RouterLink to="/" class="footer__menu__link"> Главная </RouterLink>
                </li>

                <li>
                  <RouterLink to="/about" class="footer__menu__link"> О Нас </RouterLink>
                </li>

                <li>
                  <RouterLink to="/catalog" class="footer__menu__link"> Каталог </RouterLink>
                </li>
              </ul>

              <ul class="footer__menu">
                <li>
                  <RouterLink to="/buy" class="footer__menu__link"> Где купить </RouterLink>
                </li>

                <li>
                  <RouterLink to="/blog" class="footer__menu__link"> Блог </RouterLink>
                </li>

                <li>
                  <RouterLink to="/contacts" class="footer__menu__link"> Контакты </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div class="footer__bottom">
        <section class="container">
          <div class="footer__bottom__list">
            <h4 class="footer__bottom__title">«Qorasaroy» Все права защищены</h4>

            <h4 class="footer__bottom__title">
              © Copyright 2023 - Web developed by
              <a target="_blank" href="https://sos.uz/">SOS Group</a>
            </h4>
          </div>
        </section>
      </div>
    </div>
  </footer>
</template>
