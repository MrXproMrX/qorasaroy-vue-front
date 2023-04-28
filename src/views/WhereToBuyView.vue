<template>
  <div class="whereToBuy">
    <section class="container">
      <div class="whereToBuy__cart">
        <ul class="about__menu">
          <li>
            <RouterLink to="/" class="about__menu__link">Главная</RouterLink>
          </li>

          <li>
            <RouterLink to="/buy" class="about__menu__link">Где купить</RouterLink>
          </li>
        </ul>

        <h2 class="products__title__h2">Где купить</h2>

        <div class="whereToBuy__list">
          <div class="whereToBuy__item">
            <div class="whereToBuy__map" v-html="maps"></div>

            <ul class="whereToBuy__address">
              <li>
                <h3 class="whereToBuy__address__title">
                  Адрес
                  <span>г. Ташкент, Алмазарский район, ул. Карасарай, дом 341А</span>
                </h3>
              </li>

              <li>
                <h3 class="whereToBuy__address__title">
                  График работы
                  <span>08:00 - 18:00</span>
                </h3>
              </li>

              <li>
                <h3 class="whereToBuy__address__title">
                  Телефон
                  <span>
                    <a href="tel:+998 (98) 128-05-12">+998 (98) 128-05-12</a>
                    <a href="tel:+998 (71) 228-07-36">+998 (71) 228-07-36</a>
                  </span>
                </h3>
              </li>
            </ul>
          </div>

          <div class="whereToBuy__item">
            <div class="whereToBuy__map" v-html="maps"></div>

            <ul class="whereToBuy__address">
              <li>
                <h3 class="whereToBuy__address__title">
                  Адрес
                  <span>г. Ташкент, Алмазарский район, ул. Карасарай, дом 341А</span>
                </h3>
              </li>

              <li>
                <h3 class="whereToBuy__address__title">
                  График работы
                  <span>08:00 - 18:00</span>
                </h3>
              </li>

              <li>
                <h3 class="whereToBuy__address__title">
                  Телефон
                  <span>
                    <a href="tel:+998 (98) 128-05-12">+998 (98) 128-05-12</a>
                    <a href="tel:+998 (71) 228-07-36">+998 (71) 228-07-36</a>
                  </span>
                </h3>
              </li>
            </ul>
          </div>

          <div class="whereToBuy__item">
            <div class="whereToBuy__map" v-html="maps"></div>
            <ul class="whereToBuy__address">
              <li>
                <h3 class="whereToBuy__address__title">
                  Адрес
                  <span>г. Ташкент, Алмазарский район, ул. Карасарай, дом 341А</span>
                </h3>
              </li>

              <li>
                <h3 class="whereToBuy__address__title">
                  График работы
                  <span>08:00 - 18:00</span>
                </h3>
              </li>

              <li>
                <h3 class="whereToBuy__address__title">
                  Телефон
                  <span>
                    <a href="tel:+998 (98) 128-05-12">+998 (98) 128-05-12</a>
                    <a href="tel:+998 (71) 228-07-36">+998 (71) 228-07-36</a>
                  </span>
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maps: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23974.07882325965!2d69.25580076567384!3d41.314087608182994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b07e972a36f%3A0xa2de9aed6acdc711!2z0JTRgNGD0LbQsdCwINCd0LDRgNC-0LTQvtCy!5e0!3m2!1sru!2s!4v1682514525420!5m2!1sru!2s" width="600" height="450" style="border: 0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>`,
    }
  },
}
</script>
